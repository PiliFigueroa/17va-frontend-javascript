/*
### saludo

Hacer un programa que al iniciarse pida mediante un `prompt` ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un `h1`. El `h1` debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.
*/

const $ = (selector) => document.querySelector(selector)

// const nombre = prompt("Ingrese su nombre:")
// const h1 = document.querySelector("h1")

// h1.style.fontFamily = "Arial"
// h1.style.textAlign = "center"
// h1.style.fontSize = "2em"

// $("h1").classList.add("titulo")
// $("h1").innerText = nombre

// h1.classList.add("titulo")
// h1.innerText = nombre

/*
### color

Hacer un programa que al iniciarse pida mediante un `prompt` ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.
*/

// const color = prompt("Ingresa con color en hexadecimal:", "#fff")
const body = document.querySelector("body")

// body.style.backgroundColor = color
// $("body").style.backgroundColor = color

/*
### rgb

Hacer un programa que al iniciarse pida mediante tres `prompt`s ingresar los valores correspondientes a un color en sistema `rgb`, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a `rojo`, `verde` y `azul`.
*/

// const red = prompt("Ingresa un valor para el rojo")
// const green = prompt("Ingresa un valor para el verde")
// const blue = prompt("Ingresa un valor para el azul")

// body.style.background = `rgb(${red} ${green} ${blue})`
// $("body").style.background = `rgb(${red} ${green} ${blue})`

/*
### imagen

Hacer un programa que al iniciarse pregunte mediante un `prompt` por un tamaño de imagen (siendo las opciones posibles `chica`, `mediana` y `grande`) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

| Opción elegida | Ancho de imagen |
| --- | --- | 
| chica | 200px
| mediana | 500px
| grande | 800px
*/

// https://phantom-marca.unidadeditorial.es/a6c6618d1c71eeefccb0735b6b289199/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/18/16740511556437.jpg

// const tamanio = prompt("Ingrese un tamaño de imagen (chica, mediana o grande):")

// if (tamanio === "chica") {
//     // $("#imagen").width = "200px" // modificar el atributo width
//     $("#imagen").style.width = "200px" // modificar el estilo
// }

// if (tamanio === "mediana") {
//     $("#imagen").style.width = "500px"
// }

// if (tamanio === "grande") {
//     $("#imagen").style.width = "800px"
// }

/*
### temperatura

Hacer un programa que al iniciarse pregunte mediante un `prompt` por una temperatura, y con ese dato modifique un `h1` en el `html`, de forma tal que diga, por ejemplo, `Temperatura actual: 20°`. Cambiar el color del `h1` dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

| Temperatura | Color |
| --- | --- | 
|Menor a 0°|Azul
|Mayor o igual a 0° y menor a 15°|Celeste
|Mayor o igual a 15° y menor a 25°|Verde
|Mayor o igual a 25° y menor a 30°|Amarillo
|Mayor o igual a 30° y menor a 35°|Naranja
|Mayor a 35°|Rojo
*/

// const temperatura = parseInt(prompt("Ingrese una temperatura"))

// $("h1").innerText += ` ${temperatura}°`

// if (temperatura < 0) {
//     $("h1").style.color = "blue"
// } else if (temperatura >= 0 && temperatura < 15) {
//     $("h1").style.color = "lightblue"
// } else if (temperatura >= 15 && temperatura < 25) {
//     $("h1").style.color = "green"
// } else if (temperatura >= 25 && temperatura < 30) {
//     $("h1").style.color = "yellow"
// } else if (temperatura >= 30 && temperatura < 35) {
//     $("h1").style.color = "orange"
// } else {
//     $("h1").style.color = "red"
// }

/*
### progreso

Crear una barra de progreso con dos `div`s anidados. Hacer un programa que al iniciarse pregunte mediante un `prompt` por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)
*/

// const porcentaje = prompt("Ingrese un numero:")

// $(".progress-bar").style.width = `${porcentaje}%`
// $(".progress-bar").innerText = `${porcentaje}%`

/*
### reacciones

En un documento `html` hacer un post de una red social que contenga:
- un `h3` con la usuaria
- un `p` con un `lorem ipsum`
- 3 `spans` de reacciones con un ícono (por ejemplo `Me gusta`, `Me encanta`, `Me asombra`) más un número con la cantidad

Dar estilos para que
- la tipografía sea distinta a la default
- los `spans` estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius

Hacer un programa que al iniciarse pregunte mediante tres `prompt`s por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes
*/

// const like = prompt("Ingrese cantidad de me gusta:", 0)
// const heart = prompt("Ingrese cantidad de me encanta:", 0)
// const wonder = prompt("Ingrese cantidad de me asombra:", 0)

// $(".me_gusta").innerText += like
// $(".me_encanta").innerText += heart
// $(".me_asombra").innerText += wonder

/*
### card

Hacer un programa que al iniciarse pregunte mediante `prompt`s por 
- un título
- una url de una imagen 
- una url a un artículo 

Utilizar esos datos para completar en el `html` una card que tenga 
- una imagen, con la url de la imagen ingresada // src
- un título, con el texto del título ingresado // innerText
- un link que diga `Leer más`, con la url al artículo ingresado // href

Dar algunos estilos mínimos a la card:
- centrarla con respecto a la pantalla
- agregarle un borde
- agregarle un sombreado
- cambiarle la tipografía
- cambiarle los tamaños de fuente
- cambiarle los colores por defecto
*/

// const title = prompt("Ingrese un titulo")
// const url = prompt('Ingresa la url de una imagen')
// const article = prompt('Ingresa el enlace de tu artículo')

// $("h1").innerText = title
// $("img").src = url
// $("a").href = article

// FIN DEL REPASO - EJERCITACION

// EVENTOS

// tipoDeEvento => accion
// callback => la funcion se que va a ejecutar cuando ocurra la accion
// addEventListener(tipoDeEvento, callback)

// callback => una funcion pasada como argumento


// const saludar = (nombre, apellido) => alert(`${nombre} ${apellido}`)

/*
Cuando yo necesite que mi evento ejecute una funcion que recibe uno o mas argumentos, necesito pasarle como callback una funcion anonima () => {}.
Si NO recibo NINGUN argumento, solo le paso el nombre de la funcion como argumento.
*/

// $("#saludar").addEventListener("click", () => {
//     saludar("Pilar", "Figueroa")
// })

// let contador = 0

// const sumar = () => ++contador
// const restar = () => --contador

// $("#numero").innerText = contador
    
// $("#decrementar").addEventListener("click", () => {
//     if (contador > 0) {
//         restar()
//     }
//     if (contador === 0) {
//         $("#decrementar").setAttribute("disabled", true)
//     }
//     $("#numero").innerText = contador
// })

// $("#incrementar").addEventListener("click", () => {
//     sumar()
//     $("#decrementar").removeAttribute("disabled")
//     $("#numero").innerText = contador
// })

// $(".caja").addEventListener("click", () => {
//     const colorActual = $(".caja").style.backgroundColor
//     if (colorActual === "green") {
//         $(".caja").style.backgroundColor = "red"
//     } else {
//         $(".caja").style.backgroundColor = "green"
//     }
// })

// mouseover
// mouseout

// const cambiarColor = (color) => {
//     $(".caja").style.backgroundColor = color
// }

// $(".caja").addEventListener("mouseover", () => {
//     cambiarColor("green")
// })

// $(".caja").addEventListener("mouseout", () => {
//     cambiarColor("red")
// })

// click, ddbclick, mouseover, mouseout
// input, blur, focus, submit, onchange