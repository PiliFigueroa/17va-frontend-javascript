const $ = (selector) => document.querySelector(selector)
// El querySelectorAll trae un array de elementos que coincidan con el selector dado
const $$ = (selector) => document.querySelectorAll(selector)

const cambiarColor = (color, elemento) => elemento.style.color = color

// $(".btn").addEventListener("click", () => {
//     cambiarColor("red", $("#primerParrafo"))
//     cambiarColor("red", $("#segundoParrafo"))
// })

// const parrafos = document.querySelectorAll(".parrafo")
// $$(".parrafo")

// $(".btn").addEventListener("click", () => {
//     const parrafos = $$(".parrafo")
//     for (const parrafo of parrafos) {
//         cambiarColor("red", parrafo)
//     }
// })

// Le doy el evento de tipo click a mi unico boton
// $(".btn").addEventListener("click", () => {
//     // Me traigo el array de elementos p
//     const parrafos = $$("p")
//     // Itero sobre el array de parrafos
//     for (const parrafo of parrafos) {
//         // Pregunto si su classList contiene la clase parrafo y si es true, le cambie el color a rojo, y sino a azul
//         if (parrafo.classList.contains("parrafo")) {
//             cambiarColor("red", parrafo)
//         } else {
//             cambiarColor("blue", parrafo)
//         }
//     }
// })

// const names = ["Sharime", "Veronica", "Marcela", "Ana Laura", "Rocio"]

// for (const name of names) {
//     $(".list").innerHTML += `<li>${name}</li>`
// }

// $(".btn").addEventListener("click", () => {
//     const nombreAgregado = $(".nombres").value
//     $(".listadoDeNombres").innerHTML += `<li>${nombreAgregado}</li>`
//     $(".nombres").value = ""
// })

// Itero sobre mi array de botones que prepare en el html al cual cada uno le puse un atributo data-color con el color que necesito para modificar el color de mi caja
// for (const btn of $$(".btn")) {
//     // A cada boton de mi array de botones, le defino un evento click
//     btn.addEventListener("click", () => {
//         // Guardo el valor de mi atributo data-color de cada boton sobre el cual estamos iterando
//         const color = btn.getAttribute("data-color")
//         // Finalmente, asignamos ese color como el bg de mi caja
//         $(".caja").style.backgroundColor = color
//     })
// }

// Ejemplo falopa propuesto por Rocio :)
// const colors = ["red", "blue", "yellow", "green"]
// const buttons = $$(".btn")

// for (let i = 0; i < colors.length; i++) {
//     buttons[i].addEventListener("click", () => {
//         $(".caja").style.backgroundColor = colors[i]
//     })
// }