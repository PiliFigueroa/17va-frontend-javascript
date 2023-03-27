const $ = (selector) => document.querySelector(selector)

$(".btn-open").addEventListener("click", () => {
    $("#sidebar").style.width = "250px"
    $("#main").style.marginLeft = "250px"
    $(".btn-open").style.display = "none"
})

$(".btn-close").addEventListener("click", () => {
    $("#sidebar").style.width = "0"
    $("#main").style.marginLeft = "0"
    $(".btn-open").style.display = "block"    
})