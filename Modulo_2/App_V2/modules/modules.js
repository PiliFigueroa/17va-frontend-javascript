export const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

export const Utils = {
    hideElement: (selector) => $(selector).classList.add("d-none"),
    showElement: (selector) => $(selector).classList.remove("d-none"),
    cleanContainer: (selector) => $(selector).innerHTML = "",
    randomId: () => self.crypto.randomUUID(),
    openDeleteModal: (id, fullname) => {
        $("#btn-delete").setAttribute("data-id", id)
        $(".user-name").innerText = fullname
        $("#btn-delete").addEventListener("click", () => {
            const userId = $("#btn-delete").getAttribute("data-id")
            Storage.deleteUser(userId)
            window.location.reload()
        })
    }
}

export const Storage = {
    getData: (key) => JSON.parse(localStorage.getItem(key)),
    setData: (key, array) => localStorage.setItem(key, JSON.stringify(array)),
    sendNewData: (key, callback) => {
        const currentData = Storage.getData(key)
        const newData = callback()
        currentData.push(newData)
        Storage.setData(key, currentData)
    },
    deleteUser: (id) => {
        const currentUsers = Storage.getData("users").filter(user => user.id !== id)
        Storage.setData("users", currentUsers)
    },
    editUser: () => {
        const userId = $("#btn-edit").getAttribute("data-id")
        const editedUsers = Storage.getData("users").map(user => {
            if (user.id === userId) {
                return Data.saveUser(user.id)
            }
            return user
        })
        Storage.setData("users", editedUsers)
    },
    defaultProfessions: [
        {
            id: Utils.randomId(),
            professionName: "Developer"
        },
        {
            id: Utils.randomId(),
            professionName: "Designer"
        },
        {
            id: Utils.randomId(),
            professionName: "Project Manager"
        },
        {
            id: Utils.randomId(),
            professionName: "SCRUM Master"
        }
    ],
}

export const Validations = {
    validateForm: () => {
        const regEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        const fullname = $("#fullname").value.trim()
        const email = $("#email").value.trim()
        const age = $("#age").valueAsNumber
    
        if (fullname == "") {
            Utils.showElement(".fullname-error")
            $("#fullname").classList.add("border-danger")
        } else {
            Utils.hideElement(".fullname-error")
            $("#fullname").classList.remove("border-danger")
        }
    
        if (!regEmail.test(email)) {
            Utils.showElement(".email-error")
            $("#email").classList.add("border-danger")
        } else {
            Utils.hideElement(".email-error")
            $("#email").classList.remove("border-danger")
        }
    
        if (age < 18 && age !== "") {
            Utils.showElement(".age-error")
            $("#age").classList.add("border-danger")
        } else {
            Utils.hideElement(".age-error")
            $("#age").classList.remove("border-danger")
        }
    
        return fullname !== "" && regEmail.test(email) && age >= 18 && age !== ""
    }
}

export const Render = {
    users: (users) => {
        Utils.cleanContainer("#table")
        if (users.length) {
            Utils.hideElement(".no-results")
            for (const { id, fullname, email, profession, age } of users) {
                const professionSelected = Storage.getData("professions").find(prof => prof.id === profession)
                $("#table").innerHTML += `
                    <td>${fullname}</td>
                    <td>${email}</td>
                    <td>${professionSelected.professionName}</td>
                    <td>${age}</td>
                    <td>
                        <button class="btn btn-success edit-user-btn" data-id="${id}"><i class="fa-solid fa-pencil"></i></button>
                        <button type="button" class="btn btn-danger delete-user-btn" data-bs-toggle="modal" data-bs-target="#delete-modal" data-id="${id}"><i class="fa-solid fa-trash"></i></button>
                    </td>
                `
            }
            for (const btnEdit of $$(".edit-user-btn")) {
                btnEdit.addEventListener("click", () => {
                    const userId = btnEdit.getAttribute("data-id")
                    Render.editUserForm(userId)
                })
            }
            // Recorremos el array de botones delete
            for (const btnDelete of $$(".delete-user-btn")) {
                // Le damos un evento a cada uno de esos botones
                btnDelete.addEventListener("click", () => {
                    // Tomar el data-id del boton
                    const userId = btnDelete.getAttribute("data-id")
                    // Va a buscar al usuario del localstorage que coincida con ese id
                    const selectedUser = Storage.getData("users").find(user => user.id === userId)
                    // Va a abrir la modal pasandole el id y el nombre del usuario
                    Utils.openDeleteModal(userId, selectedUser.fullname)
                })
            }
        } else {
            Utils.showElement(".no-results")
        }
    },
    professionOptions: (professions) => {
        Utils.cleanContainer("#professions")
        for (const { professionName, id } of professions) { 
            $("#professions").innerHTML += `
                <option value="${id}">${professionName}</option>
            `
            $("#filter-professions").innerHTML += `
                <option value="${id}">${professionName}</option>
            `
        }
    },
    professionsTable: (professions) => {
        Utils.cleanContainer("#table-professions")
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
        Utils.hideElement(".table")
        Utils.hideElement("#btn-submit")
        Utils.hideElement(".filters")
        Utils.showElement(".form")
        $("#btn-edit").setAttribute("data-id", id)
        const userSelected = Storage.getData("users").find(user => user.id === id)
        $("#fullname").value = userSelected.fullname
        $("#email").value = userSelected.email
        $("#age").value = userSelected.age
    }
}

export const Data = {
    saveUser: (userId) => {
        return {
            id: userId ? userId : Utils.randomId(),
            fullname: $("#fullname").value,
            email: $("#email").value,
            profession: $("#professions").value,
            age: $("#age").value
        }
    },
    saveProfession: () => {
        return {
            id: Utils.randomId(),
            professionName: $("#profession").value
        }
    },
    
    allUsers: Storage.getData("users") || [],
    allProfessions: Storage.getData("professions") || Storage.defaultProfessions
}