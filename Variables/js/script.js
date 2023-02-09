// Javascript es un lenguaje no tipado
// Variables y datos primitivos
// camelCase

// con el operador de = (igual) asignamos datos a una variable
// let firstname = "Pilar" // string
// let lastname = "Figueroa"
// let dailyMates = "3" // string
// let birthdayYear = 1996 // number - interger
// let age = 26
// let PI = 3.1416 // number - float
// let knowsHowToDrive = false // boolean
// let hasPets = true // boolean
// let willDinner // undefined
// let nulo = null

// Puedo cambiar el contenido de mis variables
// console.log(firstname)
// firstname = "Serena"
// console.log(firstname)

// Puedo cambiar el tipo de dato de mis variables
// willDinner = true
// console.log(willDinner)

// Operador de concatenacion
// console.log(firstname + ' ' + lastname)

// console.log("Hola mi nombre es " + firstname + ' ' + lastname + ' y tengo ' + age + ' años.')

// Sugar syntax
// backstick => template literals / template strings
// let presentation = `Hola mi nombre es ${firstname} ${lastname} y tengo ${age} años.`

// typeof nos sirve para saber que tipo de dato es una variable
// console.log(typeof presentation)

/* OPERADORES ARITMETICOS */
// + suma
// - resta
// * producto/multiplicacion
// / division
// % modulo (resto de la division)

// let number1 = 10
// let number2 = 5

// console.log("Suma:", number1 + number2)
// console.log("Resta:", number2 - number1)
// console.log("Producto:", number1 * number2)
// console.log("Division:", number1 / number2)
// console.log("Modulo:", number1 % number2)

// const => constante (inmutable)

// const placeOfBirth = "Ushuaia, Tierra del Fuego"
// placeOfBirth = "Quilmes" // NO SE PUEDE

// console.log(`${firstname} nacio en ${placeOfBirth}`)

// alert("No podes ver este contenido")

// const name = prompt("Ingrese su nombre:")
// const age = prompt("Ingrese su edad:", 0)
// const birthday = prompt("Ingrese su nacimiento:", "dd-mm-aaaa")

// console.log(`Usted ingreso su nombre: ${name}`)
// console.log(`Usted ingreso su edad: ${age}`)
// console.log(`Usted ingreso su año de nacimiento: ${birthday}`)

const num1 = prompt("Ingrese el primer numero", 0)
const num2 = prompt("Ingrese el segundo numero", 0)

// parseInt() => una funcion nativa de javascript que nos permite transformar de un string a un numero entero
console.log("La suma es:", parseInt(num1) + parseInt(num2))
console.log("La resta es:", num1 - num2)
console.log("La multiplicacion es:", num1 * num2)
console.log("La division es:", num1 / num2)