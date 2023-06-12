import { $, Utils, Methods, SEL } from './modules.js'

$(SEL.btnSubmit).addEventListener("click", () => {
    Utils.hideElement(SEL.tableHead)
    Utils.hideElement(SEL.btnEdit)
    Utils.showElement(SEL.form)
    Utils.isSubmit = true
})

$(SEL.form).addEventListener("submit", (e) => {
    e.preventDefault()
    if (Utils.isSubmit) {
        Methods.registerUsers()
    } else {
        const userId = $(SEL.btnEdit).getAttribute("data-id")
        Methods.editUser(userId)
        Utils.hideElement(SEL.form)
        
    }
    $(SEL.form).reset()
})

$(SEL.btnDelete).addEventListener("click", () => {
    const userId = $(SEL.btnDelete).getAttribute("data-id")
    Methods.deleteUser(userId)
})

$(SEL.btnCancel).addEventListener("click", () => {
    Utils.hideElement(SEL.alert)
    Utils.showElement(SEL.tableHead)
})

window.addEventListener("load", () => {
    Methods.getUsers()
})