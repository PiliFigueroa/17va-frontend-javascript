const $ = (selector) => document.querySelector(selector)

// getAttribute, setAttribute, removeAttribute

$(".change-theme").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-theme")
    if (currentTheme) {
        $("#lightbulb-off").classList.remove("hidden")
        $("#lightbulb-on").classList.add("hidden")
        $("body").removeAttribute("data-theme", "light-theme")
    } else {
        $("#lightbulb-off").classList.add("hidden")
        $("#lightbulb-on").classList.remove("hidden")
        $("body").setAttribute("data-theme", "light-theme")
    }
})