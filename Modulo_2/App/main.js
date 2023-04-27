// Getting elements from DOM
const $ = (selector) => document.querySelector(selector)

// Show or hide handlers
const showElement = (selector) => $(selector).classList.remove("d-none")
const hideElement = (selector) => $(selector).classList.add("d-none")
const cleanContainer = (selector) => $(selector).innerHTML = ""

// Random id generator
const randomId = () => self.crypto.randomUUID()

// LocalStorage Handlers
const getUsers = (key) => JSON.parse(localStorage.getItem(key))
const setUsers = (key, array) => localStorage.setItem(key, JSON.stringify(array))

const allUsers = getUsers("users") || []

const renderUsers = (users) => {
    cleanContainer("#table")
    if (users.length) {
        hideElement(".no-results")
        for (const { id, fullname, email, age } of users) {
            $("#table").innerHTML += `
                <td>${fullname}</td>
                <td>${email}</td>
                <td>${age}</td>
                <td>
                    <button class="btn btn-success" onclick="editUserForm('${id}')"><i class="fa-solid fa-pencil"></i></button>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-modal" onclick="openDeleteModal('${id}', '${fullname}')"><i class="fa-solid fa-trash"></i></button>
                </td>
            `
        }
    } else {
        showElement(".no-results")
    }
}

const validateForm = () => {
    const regEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    const regAge = new RegExp('/^[0-9]+$/')
    const fullname = $("#fullname").value.trim()
    const email = $("#email").value.trim()
    const age = $("#age").valueAsNumber

    if (fullname == "") {
        showElement(".fullname-error")
        $("#fullname").classList.add("border-danger")
    } else {
        hideElement(".fullname-error")
        $("#fullname").classList.remove("border-danger")
    }

    if (!regEmail.test(email)) {
        showElement(".email-error")
        $("#email").classList.add("border-danger")
    } else {
        hideElement(".email-error")
        $("#email").classList.remove("border-danger")
    }

    if (age < 18 && age !== "") {
        showElement(".age-error")
        $("#age").classList.add("border-danger")
    } else {
        hideElement(".age-error")
        $("#age").classList.remove("border-danger")
    }

    return fullname !== "" && regEmail.test(email) && age >= 18 && age !== ""
}

const saveUserData = (userId) => {
    return {
        id: userId ? userId : randomId(),
        fullname: $("#fullname").value,
        email: $("#email").value,
        age: $("#age").value
    }
}

const addUser = () => {
    const currentUsers = getUsers("users")
    const newUser = saveUserData()
    currentUsers.push(newUser)
    setUsers("users", currentUsers)
}

const deleteUser = (id) => {
    const currentUsers = getUsers("users").filter(user => user.id !== id)
    setUsers("users", currentUsers)
}

const editUser = () => {
    const userId = $("#btn-edit").getAttribute("data-id")
    const editedUsers = getUsers("users").map(user => {
        if (user.id === userId) {
            return saveUserData(user.id)
        }
        return user
    })
    setUsers("users", editedUsers)
}

const editUserForm = (id) => {
    hideElement(".table")
    hideElement("#btn-submit")
    showElement(".form")
    $("#btn-edit").setAttribute("data-id", id)
    const userSelected = getUsers("users").find(user => user.id === id)
    $("#fullname").value = userSelected.fullname
    $("#email").value = userSelected.email
    $("#age").value = userSelected.age
}

const openDeleteModal = (id, fullname) => {
    $("#btn-delete").setAttribute("data-id", id)
    $(".user-name").innerText = fullname
    $("#btn-delete").addEventListener("click", () => {
        const userId = $("#btn-delete").getAttribute("data-id")
        deleteUser(userId)
        window.location.reload()
    })
}

const initializeApp = () => {
    setUsers("users", allUsers)
    renderUsers(allUsers)

    $("#add-user-btn").addEventListener("click", () => {
        showElement(".form")
        hideElement(".table")
        hideElement("#btn-edit")
        hideElement(".no-results")
    })

    $("#btn-submit").addEventListener("click", (e) => {
        e.preventDefault()
        if (validateForm()) {
            addUser()
        }
    })

    $("#btn-edit").addEventListener("click", (e) => {
        e.preventDefault()
        if (validateForm()) {
            editUser()
            hideElement(".form")
            showElement(".table")
            renderUsers(getUsers("users"))
        }
    })

    $("#age").addEventListener("input", (e) => {
        const value = e.target.valueAsNumber
        if (isNaN(value)) {
            $("#age").value = ""
        }
    })
}

window.addEventListener("load", initializeApp)