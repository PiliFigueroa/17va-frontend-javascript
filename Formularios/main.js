const $ = (selector) => document.querySelector(selector)

// funciones auxiliar para mostrar y ocultar elementos
const hideElement = (element) => element.style.display = "none"
const hideElement2 = (element) => element.classList.add("hidden")

const showElement = (element) => element.style.display = "block"
const showElement2 = (element) => element.classList.remove("hidden")

// click, submit
// preventDefault()
// $("#submit").addEventListener("click", (e) => {
//     e.preventDefault()
//     $("#paragraph").innerText = $("#fullname").value
// })

// const initializeProject = () => {
//     $("#fullname").value = "TOP TEXT"
// }

// initializeProject()

// window.addEventListener("load", initializeProject)

// $("#submit").addEventListener("click", () => {
//     $("#paragraph").innerText = $("#fullname").value
// })

// input, change, blur, focus

// $("#fullname").addEventListener("input", () => {
//     $("#paragraph").innerText = $("#fullname").value.toUpperCase()
// })

// $("#img").addEventListener("input", () => {
//     const urlImage = $("#img").value
//     $(".box").style.width = "200px"
//     $(".box").style.height = "200px"
//     $(".box").style.backgroundSize = "cover"
//     $(".box").style.backgroundImage = `url(${urlImage})`
// })

// $("#number").addEventListener("input", () => {
//     // $("#number").valueAsNumber => obtengo un type number
//     // $("#number").value => obtengo un type string
//     $("body").style.fontSize = `${$("#number").value}px`
// })

// $("#color").addEventListener("input", () => {
//     $("body").style.backgroundColor = $("#color").value
// })

// $("#range").value => me devuelve el numero de en donde esta el rango

// $("#range").addEventListener("input", () => {
//     const rangeValue = $("#range").value
//     $("#spongeBob").style.filter = `grayscale(${rangeValue}%)`
// })

// $("#acceptTerms").addEventListener("input", () => {
//     const isChecked = $("#acceptTerms").checked
//     if (isChecked) {
//         $("body").style.backgroundColor = "red"
//     } else {
//         $("body").style.backgroundColor = "#c2c2c2"
//     }
// })

// $("#font").addEventListener("input", () => {
//     $("body").style.fontFamily = $("#font").value
// })
