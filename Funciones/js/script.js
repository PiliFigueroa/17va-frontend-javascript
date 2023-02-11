/* REPASO */

// string - number - boolean - undefined - null - NaN
// let y const

// document.write(`<h2>${firstname} ${lastname}</h2>`) // esto daria error de inicializacion

let firstname = "Pilar"
let lastname = "Figueroa"

// console.log(firstname)
// document.write(`<h2>${firstname} ${lastname}</h2>`)

// firstname = "Micaela"

// document.write(`<h2>${firstname} ${lastname}</h2>`)

// const age = 26
// console.log(age)

// age = 30
// console.log(age) // no se puede cambiar el valor

// alert() prompt()

// confirm()

// const acceptTerms = confirm("Aceptas los terminos y condiciones?")
// console.log(acceptTerms)

// let num1 = 5
// let num2 = 10
// let num3 = 15

// console.log(num1 + num2 + num3)
// console.log(num1 + (num2 - num3))
// console.log((num1 + num2) * num3)

// const num1 = parseInt(prompt("Ingrese el primer numero:", 0))
// const num2 = parseInt(prompt("Ingrese el segundo numero:", 0))
// const num3 = parseInt(prompt("Ingrese el tercer numero:", 0))

// NaN => Not A Number
// console.log(num1 / num2 / num3)
// console.log(10 * undefined)
// console.log(10 / null)

// true = 1
// false = 0
// console.log(true + false)

/* FIN DEL REPASO */

// Funciones
// Es un bloque de codigo que se puede reutilizar

// function welcome() {
//     // sentencias de codigo
//     document.write("Hola desde mi funcion saludar!<br>")
// }

// arrow function

const welcome = () => {
    // sentencias de codigo
    document.write("Hola desde mi arrow funcion saludar!<br>")
}

// welcome()

// parametros de funciones

const showName = (name) => {
    console.log(name)
}

// le pasamos el argumento
// showName("Pilar")
// showName("Mica")
// showName("Fernanda")

// const sumar = (num1, num2) => {
//     const resultado = num1 + num2
//     console.log(resultado)
// }

// sumar(5, 10)
// sumar(-10, 10)
// sumar(75, -33)

const dia = "Viernes"

const numerologia = (dia, mes, anio) => {
    const resultado = dia + mes + anio
    console.log(resultado)
}

// numerologia(7, 11, 1996)
// console.log(dia)
// console.log(resultado)


// el scope es el alcance de nuestros bloques de codigo
// si tengo una funcion con parametros con un nombre especifico, no pasa nada con tener variables por fuera con el mismo nombre

// const num1 = parseInt(prompt("Ingrese el primer numero:", 0))
// const num2 = parseInt(prompt("Ingrese el segundo numero:", 0))

// sumar(num1, num2)

// return => me permite tener disponible el valor por fuera de la funcion
//        => el retorno me corta la ejecucion de mi funcion

const sumar = (num1, num2) => {
    const result = num1 + num2
    return result
}

const sumar2 = (num1, num2) => {
    return num1 + num2
}

// console.log(sumar(1, 1))

const resta = (num1, num2) => {
    const result = num1 - num2
    return result
}

// const miResta = resta(10, 5)

// console.log(miResta)

// console.log(sumar(10, resta(11, -6)))
// console.log(sumar(10, miResta))

const num1 = parseInt(prompt("Ingrese el primer numero:", 0))
const num2 = parseInt(prompt("Ingrese el segundo numero:", 0))

document.write(`<h3>La suma es: ${sumar(num1, num2)}</h3>`)