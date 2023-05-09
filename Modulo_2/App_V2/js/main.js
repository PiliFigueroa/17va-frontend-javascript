import { $, Utils, Validations, Storage, Render, Data } from "../modules/modules.js"

const initializeApp = () => {
    Storage.setData("users", Data.allUsers)
    Storage.setData("professions", Data.allProfessions)
    Render.users(Data.allUsers)
    Render.professionOptions(Data.allProfessions)
    Render.professionsTable(Data.allProfessions)

    $("#add-user-btn").addEventListener("click", () => {
        Utils.showElement(".form")
        Utils.hideElement(".table")
        Utils.hideElement("#btn-edit")
        Utils.hideElement(".no-results")
        Utils.hideElement(".table-professions")
        Utils.hideElement(".form-profession")
        Utils.hideElement(".filters")
    })

    $("#btn-submit").addEventListener("click", (e) => {
        e.preventDefault()
        if (Validations.validateForm()) {
            Storage.sendNewData("users", Data.saveUser)
        }
    })

    $("#btn-edit").addEventListener("click", (e) => {
        e.preventDefault()
        if (Validations.validateForm()) {
            Storage.editUser()
            Utils.hideElement(".form")
            Utils.showElement(".table")
            Render.users(Storage.getData("users"))
        }
    })

    $("#age").addEventListener("input", (e) => {
        const value = e.target.valueAsNumber
        if (isNaN(value)) {
            $("#age").value = ""
        }
    })

    $("#add-profession-btn").addEventListener("click", () => {
        Utils.hideElement(".table")
        Utils.hideElement(".form")
        Utils.hideElement(".no-results")
        Utils.showElement(".form-profession")
        Utils.showElement(".table-professions")
        Utils.hideElement(".filters")
    })

    $("#btn-submit-profession").addEventListener("click", (e) => {
        e.preventDefault()
        Storage.sendNewData("professions", Data.saveProfession)
        const currentProfessions = Storage.getData("professions")
        Render.professionOptions(currentProfessions)
        Render.professionsTable(currentProfessions)
    })

    $("#filter-professions").addEventListener("input", (e) => {
        const professionId = e.target.value
        const currentUsers = Storage.getData("users")
        if (!professionId) {
            Render.users(currentUsers)
        } else {
            const filteredUsers = currentUsers.filter(user => user.profession === professionId)
            Render.users(filteredUsers)
        }
    })
}

window.addEventListener("load", initializeApp)