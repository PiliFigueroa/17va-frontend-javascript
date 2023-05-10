import { $, Utils, Validations, Storage, Render, Data, Statics } from "../modules/modules.js"

const initializeApp = () => {
    Storage.setData("users", Data.allUsers)
    Storage.setData("professions", Data.allProfessions)
    Render.users(Data.allUsers)
    Render.professionOptions(Data.allProfessions)
    Render.professionsTable(Data.allProfessions)

    $(Statics.menuAddUser).addEventListener("click", () => {
        Utils.showElement(Statics.formUsers)
        Utils.hideElement(Statics.tableUsers)
        Utils.hideElement(Statics.editSubmitBtn)
        Utils.hideElement(Statics.noResultsMessage)
        Utils.hideElement(Statics.tableProfessions)
        Utils.hideElement(Statics.formProfession)
        Utils.hideElement(Statics.containerFilters)
    })

    $(Statics.btnSubmitUsers).addEventListener("click", (e) => {
        e.preventDefault()
        if (Validations.validateForm()) {
            Storage.sendNewData("users", Data.saveUser)
        }
    })

    $(Statics.editSubmitBtn).addEventListener("click", (e) => {
        e.preventDefault()
        if (Validations.validateForm()) {
            Storage.editUser()
            Utils.hideElement(Statics.formUsers)
            Utils.showElement(Statics.tableUsers)
            Render.users(Storage.getData("users"))
        }
    })

    $(Statics.inputAge).addEventListener("input", (e) => {
        const value = e.target.valueAsNumber
        if (isNaN(value)) {
            $(Statics.inputAge).value = ""
        }
    })

    $(Statics.menuAddProfession).addEventListener("click", () => {
        Utils.hideElement(Statics.tableUsers)
        Utils.hideElement(Statics.formUsers)
        Utils.hideElement(Statics.noResultsMessage)
        Utils.showElement(Statics.formProfession)
        Utils.showElement(Statics.tableProfessions)
        Utils.hideElement(Statics.containerFilters)
    })

    $(Statics.btnSubmitProfession).addEventListener("click", (e) => {
        e.preventDefault()
        Storage.sendNewData("professions", Data.saveProfession)
        const currentProfessions = Storage.getData("professions")
        Render.professionOptions(currentProfessions)
        Render.professionsTable(currentProfessions)
    })

    $(Statics.selectFilters).addEventListener("input", (e) => {
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