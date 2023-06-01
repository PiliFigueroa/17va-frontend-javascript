// Getting elements from DOM
const $ = (selector) => document.querySelector(selector)

// Show or hide handlers
const showElement = (selector) => $(selector).classList.remove("d-none")
const hideElement = (selector) => $(selector).classList.add("d-none")

const cleanContainer = (selector) => $(selector).innerHTML = ""

// Random id generator
const randomId = () => self.crypto.randomUUID()

// LocalStorage Handlers
const getData = (key) => JSON.parse(localStorage.getItem(key))
const setData = (key, array) => localStorage.setItem(key, JSON.stringify(array))

const defaultProfessions = [
    {
        id: randomId(),
        professionName: "Developer"
    },
    {
        id: randomId(),
        professionName: "Designer"
    },
    {
        id: randomId(),
        professionName: "Project Manager"
    },
    {
        id: randomId(),
        professionName: "SCRUM Master"
    }
]

const allUsers = getData("users") || []
const allProfessions = getData("professions") || defaultProfessions

const renderUsers = (users) => {
    cleanContainer("#table")
    if (users.length) {
        hideElement(".no-results")
        for (const { id, fullname, email, profession, age } of users) {
            const professionSelected = getData("professions").find(prof => prof.id === profession)
            $("#table").innerHTML += `
                <td>${fullname}</td>
                <td>${email}</td>
                <td>${professionSelected.professionName}</td>
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

const renderProfessionOptions = (professions) => {
    cleanContainer("#professions")
    for (const { professionName, id } of professions) { 
        $("#professions").innerHTML += `
            <option value="${id}">${professionName}</option>
        `
        $("#filter-professions").innerHTML += `
            <option value="${id}">${professionName}</option>
        `
    }
}

const renderProfessionsTable = (professions) => {
    cleanContainer("#table-professions")
    for (const { professionName } of professions) {
        $("#table-professions").innerHTML += `
        <tr>
            <td>${professionName}</td>
            <td>
                <button class="btn btn-success"><i class="fa-solid fa-pencil"></i></button>
                <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
        `
    }
}

const validateForm = () => {
    const regEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
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
        profession: $("#professions").value,
        age: $("#age").value
    }
}

const saveProfessionData = () => {
    return {
        id: randomId(),
        professionName: $("#profession").value
    }
}

const sendNewData = (key, callback) => {
    const currentData = getData(key)
    const newData = callback()
    currentData.push(newData)
    setData(key, currentData)
}

const deleteUser = (id) => {
    const currentUsers = getData("users").filter(user => user.id !== id)
    setData("users", currentUsers)
}

const editUser = () => {
    const userId = $("#btn-edit").getAttribute("data-id")
    const editedUsers = getData("users").map(user => {
        if (user.id === userId) {
            return saveUserData(user.id)
        }
        return user
    })
    setData("users", editedUsers)
}

const editUserForm = (id) => {
    hideElement(".table")
    hideElement("#btn-submit")
    showElement(".form")
    $("#btn-edit").setAttribute("data-id", id)
    const userSelected = getData("users").find(user => user.id === id)
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
    setData("users", allUsers)
    setData("professions", allProfessions)
    renderUsers(allUsers)
    renderProfessionOptions(allProfessions)
    renderProfessionsTable(allProfessions)

    $("#add-user-btn").addEventListener("click", () => {
        showElement(".form")
        hideElement(".table")
        hideElement("#btn-edit")
        hideElement(".no-results")
        hideElement(".table-professions")
        hideElement(".form-profession")
        hideElement(".filters")
    })

    $("#btn-submit").addEventListener("click", (e) => {
        e.preventDefault()
        if (validateForm()) {
            sendNewData("users", saveUserData)()
        }
    })

    $("#btn-edit").addEventListener("click", (e) => {
        e.preventDefault()
        if (validateForm()) {
            editUser()
            hideElement(".form")
            showElement(".table")
            renderUsers(getData("users"))
        }
    })

    $("#age").addEventListener("input", (e) => {
        const value = e.target.valueAsNumber
        if (isNaN(value)) {
            $("#age").value = ""
        }
    })

    $("#add-profession-btn").addEventListener("click", () => {
        hideElement(".table")
        hideElement(".form")
        hideElement(".no-results")
        hideElement(".filters")
        showElement(".form-profession")
        showElement(".table-professions")
    })

    $("#btn-submit-profession").addEventListener("click", (e) => {
        e.preventDefault()
        sendNewData("professions", saveProfessionData)
        const currentProfessions = getData("professions")
        renderProfessionOptions(currentProfessions)
        renderProfessionsTable(currentProfessions)
    })

    $("#filter-professions").addEventListener("input", (e) => {
        const professionId = e.target.value
        const currentUsers = getData("users")
        if (!professionId) {
            renderUsers(currentUsers)
        } else {
            const filteredUsers = currentUsers.filter(user => user.profession === professionId)
            renderUsers(filteredUsers)
        }
    })
}

window.addEventListener("load", initializeApp)