// DOM => Document Object Model

// getElementById()
// querySelector() => etiqueta, class, id

// const h1 = document.getElementById("encabezado")

const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const p = document.querySelector(".parrafo")

const inputText = document.querySelector("#nombre")

// innerHTML

// p.innerHTML = "<b>Soy el texto modificado desde javascript</b>" // puedo insertar nodos nuevos

// innerText
// += con este operador puedo concatenar texto nuevo al ya existente

// const nombreDeUsuario = prompt("Ingrese su nombre:")

// p.innerText += nombreDeUsuario
// p.innerText = "<b>Soy el texto modificado desde javascript</b>" // esto no se puede con innerText

// style

// h1.style.color = "red"
// h1.style.backgroundColor = "#000"
// h1.style.fontFamily = "Arial"
// h1.style.display = "block"

// https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true

// const meme = document.querySelector("#meme")
// meme.style.backgroundImage = "url('https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true')"

// classList (add, remove, toggle, contains)

const blueBox = document.querySelector(".azul")
const orangeBox = document.querySelector(".naranja")

// blueBox.classList.add("grande")
// blueBox.classList.add("visibility--hidden")
// orangeBox.classList.remove("naranja")

// setTimeout(() => {
//     blueBox.classList.add("visibility--hidden")
// }, 3000)

// const cambiarTamanio = () => {
//     blueBox.classList.toggle("grande")
// }

// contains => devuelve un booleano segun si el elemento contiene la clase que le pasamos como argumento
// blueBox.classList.contains("azul") // true
// blueBox.classList.contains("visibility--hidden")  // false

// Modificando atributos

const password = document.querySelector("#passwordId")

// console.log(password.id)
// console.log(password.name)
// console.log(password.type)

// password.type = "password"
// password.type = "text"

// setAttribute getAttribute removeAttribute

// password.setAttribute("class", "azul")
// password.getAttribute("name")
// password.removeAttribute("name")
// p.setAttribute("data-id", 5)

// Trick and tip

// Variables
// Funciones
// Eventos

// Funcion que retorna elementos de html segun el argumento que recibe
const $ = (selector) => document.querySelector(selector)

$("#passwordId").type = "text"
$("#passwordId").type = "password"

// $(".azul").classList.add("grande")