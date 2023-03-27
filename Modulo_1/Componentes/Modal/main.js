const $ = (selector) => document.querySelector(selector)

$("#btn-open-modal").addEventListener("click", (e) => {
    $("#modal-container").style.display = "block"
})

$("#btn-close-modal").addEventListener("click", () => {
    $("#modal-container").style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == $("#modal-container")) {
        $("#modal-container").style.display = "none"
    }
})

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        $("#modal-container").style.display = "none"
    }
})