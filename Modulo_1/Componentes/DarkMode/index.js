const body = document.querySelector("body");
const titulo = document.querySelector("h1");
const botonToggle = document.querySelector(".buttom-mode");
const subtitulo = document.querySelector("h3");

botonToggle.addEventListener("click", () => {
  body.classList.toggle("modo-oscuro");
  titulo.classList.toggle("modo-oscuro");
  subtitulo.classList.toggle("modo-oscuro");
});