export const $ = (selector) => document.querySelector(selector)

export const Utils = {
    hideElement: (selector) => $(selector).classList.add("d-none"),
    showElement: (selector) => $(selector).classList.remove("d-none"),
    cleanContainer: (selector) => $(selector).innerHTML = "",
    randomId: () => self.crypto.randomUUID()
}

export const Validations = {
    validateForm: () => {
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
}

export const Storage = {
    getData: (key) => JSON.parse(localStorage.getItem(key)),
    setData: (key, array) => localStorage.setItem(key, JSON.stringify(array)),
    sendNewData: (key, callback) => {
        const currentData = getData(key)
        const newData = callback()
        currentData.push(newData)
        setData(key, currentData)
    },
    deleteUser: (id) => {
        const currentUsers = getData("users").filter(user => user.id !== id)
        setData("users", currentUsers)
    },
    editUser: () => {
        const userId = $("#btn-edit").getAttribute("data-id")
        const editedUsers = getData("users").map(user => {
            if (user.id === userId) {
                return saveUserData(user.id)
            }
            return user
        })
        setData("users", editedUsers)
    }
}

export const Render = {
    renderUsers: (users) => {
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
    },
    renderProfessionOptions: (professions) => {
        cleanContainer("#professions")
        for (const { professionName, id } of professions) { 
            $("#professions").innerHTML += `
                <option value="${id}">${professionName}</option>
            `
            $("#filter-professions").innerHTML += `
                <option value="${id}">${professionName}</option>
            `
        }
    },
    renderProfessionsTable: (professions) => {
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
    },
    editUserForm: (id) => {
        hideElement(".table")
        hideElement("#btn-submit")
        showElement(".form")
        $("#btn-edit").setAttribute("data-id", id)
        const userSelected = getData("users").find(user => user.id === id)
        $("#fullname").value = userSelected.fullname
        $("#email").value = userSelected.email
        $("#age").value = userSelected.age
    },
    openDeleteModal: (id, fullname) => {
        $("#btn-delete").setAttribute("data-id", id)
        $(".user-name").innerText = fullname
        $("#btn-delete").addEventListener("click", () => {
            const userId = $("#btn-delete").getAttribute("data-id")
            deleteUser(userId)
            window.location.reload()
        })
    }
}

export const Data = {
    saveUserData: (userId) => {
        return {
            id: userId ? userId : randomId(),
            fullname: $("#fullname").value,
            email: $("#email").value,
            profession: $("#professions").value,
            age: $("#age").value
        }
    },
    saveProfessionData: () => {
        return {
            id: randomId(),
            professionName: $("#profession").value
        }
    },
    defaultProfessions: [
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
    ],
    allUsers: getData("users") || [],
    allProfessions: getData("professions") || defaultProfessions
}