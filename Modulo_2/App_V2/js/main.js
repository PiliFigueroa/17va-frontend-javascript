import { $, Utils, Validations, Storage, Render, Data } from "../modules/modules.js"

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
        showElement(".form-profession")
        showElement(".table-professions")
        hideElement(".filters")
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