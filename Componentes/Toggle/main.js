const $ = (selector) => document.querySelector(selector)

$(".light-bulb").addEventListener("click", () => {
    $(".light-bulb").classList.toggle("on")
})