/* REPASO */
// funciones aritmeticas - return
// bonus contador - scope

// Las funciones deben hacer una sola cosa, y hacerla BIEN

const calcularArea = (base, altura) => {
    return base * altura
}

// console.log("el resultado es:", calcularArea(15, 10))

const sumar = (a, b) => {
    return a + b
}

const resta = (a, b) => {
    return a - b
}

const division = (a, b) => {
    return a / b
}

const producto = (a, b) => {
    return a * b
}

const saludar = () => {
    const nombreUsuario = prompt("Ingrese su nombre:")
    return `holaa ${nombreUsuario}`
}

// const resultado = sumar(20, 50)

// console.log(resultado)
// console.log(resta(100, resultado))
// console.log(resta(100, sumar(20, 50)))

// let numero = 0

// const incrementar = () => {
//     numero++
//     return numero
// }

const calculoIva = (precio) => {
    return (precio*21) / 100
}

const impuestoPais = (precio) => {
    return (precio * 35) / 100
}

// Si distintos paises tuvieran distinto porcentaje de impuesto
// const impuestoPais2 = (precio, porcentaje) => {
//     return (precio*porcentaje) / 100
// }

// practica   PREGUNTAR
const calcularTotalImpuestos = (precio) => {
    return calculoIva(precio) + impuestoPais(precio) + precio
}

/* FIN DEL REPASO */

// Estas funciones nativas modifican la variable original

let nombre = "Hola Pilar"
let numero = 10

// length => devuelve el numero de caracteres de nuestra variable
// console.log(nombre.length)

// toUpperCase => toma el string y pasa todo a mayuscula
// console.log(nombre.toUpperCase())

// toLowerCase => toma el string y pasa todo a minuscula
// console.log(nombre.toLowerCase())

// slice => cortar nuestro string entre la cantidad de caracteres dados
// puede recibir uno o dos parametros
// con un solo parametro va a cortar desde esa posicion hasta el final
// const saludoCortado = nombre.slice(5)
// con dos parametros el primer valor es DESDE y el segundo es HASTA donde
// const saludoCortado2 = nombre.slice(0, 4)
// console.log(saludoCortado2)

// case sensitive
// includes => devolver un booleano
// console.log(nombre.includes("Hola"))
// console.log(nombre.includes("hola"))

// indexOf => devuelve el numero del caracter que recibe como argumento
// const caracter = nombre.indexOf("P")
// console.log(caracter)

// replace => recibir como argumento lo que tiene que reemplazar y lo que va a ser reemplazado
// const reemplazarNombre = nombre.replace("Pilar", "Mica")
// console.log(reemplazarNombre)

// toString => toma un dato y lo transforma a string
// console.log(typeof numero.toString())

// Number() => te transforma a numero y respeta la coma
// let numeroConComa = "10.5"
// console.log(Number(numeroConComa))

// Boolean() => detecta si un tipo de dato es truthy o falsy
// const booleano = Boolean(undefined)
// console.log(booleano)

// isNaN() => pregunta si NO es un number
// console.log(isNaN(nombre))

// Objeto Math => es dato que ya viene con javascript y posee sus propios metodos y funciones
let float = 10.4

// round => redondea segun el numero con coma
// console.log(Math.round(float))

// ceil => redondea para arriba
// console.log(Math.ceil(float))

// floor => redondea para abajo
// console.log(Math.floor(float))

// random => devuelve un numero aleatorio entre 0 y 1
// console.log(Math.random())
// console.log(Math.random() * 10)

// min => devuelve el numero mas bajo
// console.log(Math.min(10, 55, 120, -12, 0, -4))

// max => devuelve el numero mas alto
// console.log(Math.max(10, 55, 120, -12, 0, -4))

// Ejercicio practico => devolver un numero aleatorio entre 0 y 5, sin coma, es decir, redondeado.

const numeroRandom = Math.round(Math.random() * 5)
console.log(numeroRandom)