const $ = (selector) => document.querySelector(selector)

$(".accordion").addEventListener("click", () => {
    $(".accordion").classList.toggle("active")
    if ($(".content").style.display === "block") {
        $(".content").style.display = "none"
    } else {
        $(".content").style.display = "block"
    }
})