/*
Con variable que representa true o false
NO comparamos con === es redudante
*/

// const condicion = true

// Si necesitamos validar a true
// if (condicion) {
//     console.log("Me ejecute")
// }

// Si necesitamos validar a false
// if (!condicion) {
//     console.log("Me ejecute")
// }

/* FIN REPASO */

// && and
// El operador && nos permite evaluar mas condiciones y para que se cumpla la condicion TODOS los terminos deben ser verdaderos.

// const edad = 18
// const sabeManejar = true

//    true      y      true
// if (edad >= 18 && sabeManejar) {
//     console.log("Podes sacar el registro!")
// } else {
//     console.log("Todavia te falta")
// }

// || or
// Basta con que una sola condicion sea true para que se cumpla el bloque.
// El unico caso en el que NO se cumple, es que todos los terminos sean false.

// const condicion = false
// const condicion2 = false

// if (condicion || condicion2) {
//     console.log("Me ejecute")
// }

// Condicionales anidados

// const condicion = true
// const condicion2 = true

// if (condicion) {
//     if (condicion2) {
//         console.log("1")
//     } else {
//         console.log("2")
//     }
// }

// if (condicion && condicion2) {
//     console.log("1")
// } else {
//     console.log("2")
// }

// Operador ternario => es lo mismo que un if simple pero escrito bonito
// condicion ? se ejecuta si se cumple : o se ejecuta esto
// Es que solo funciona condicionales simples
// Estoy obligada a poner el else

// const edad = 16

// edad >= 16 ? console.log("Podes votar") : console.log("Todavia no tenes la edad suficiente para elegir a un presidente")

// if (edad >= 16) {
//     console.log("Podes votar")
// } else {
//     console.log("Todavia no tenes la edad suficiente para elegir a un presidente")
// }

// esPositivoONegativo
// const esPositivoONegativo = (a, b) => {
//     const resultado = a + b
//     return resultado > 0 ? "Es positivo" : "Es negativo"
// }

// console.log(esPositivoONegativo(-10, -5))
// console.log(esPositivoONegativo(10, -5))

// Switch
// Evaluamos una condicion y segun cada caso podemos ejecutar un bloque distinto

// const diaDeLaSemana = parseInt(prompt("Ingrese un numero del 0 al 6:", 0))

// switch (diaDeLaSemana) {
//     case 0:
//         console.log("Domingo")
//         break
//     case 1:
//         console.log("Lunes")
//         break
//     case 2:
//         console.log("Martes")
//         break
//     case 3:
//         console.log("Miercoles")
//         break
//     case 4:
//         console.log("Jueves")
//         break
//     case 5:
//         console.log("Viernes")
//         break
//     case 6:
//         console.log("Sabado yeeeey :D")
//         break
//     default:
//         console.log("No existe un dia de la semana para ese numero")
//         break
// }

// Ejercicio piedraPapelTijera

// const jugarPiedraPapelTijera = (a, b) => {
//     const jugador1 = a.toLowerCase()
//     const jugador2 = b.toLowerCase()
//     let ganador
//     if ((jugador1 === "tijera" && jugador2 === "papel") || (jugador1 === "papel" && jugador2 === "tijera")) {
//       ganador = "¡Ganó tijera!"
//     }
//     if ((jugador1 === "tijera" && jugador2 === "piedra") || (jugador1 === "piedra" && jugador2 === "tijera")) {
//       ganador = "¡Ganó piedra!"
//     }
//     if ((jugador1 === "tijera" && jugador2 === "tijera") || (jugador1 === "papel" && jugador2 === "papel") || (jugador1 === "piedra" && jugador2 === "piedra")) {
//       ganador = "¡Empate!"
//     }
//     if ((jugador1 === "papel" && jugador2 === "piedra") || (jugador1 === "piedra" && jugador2 === "papel")) {
//       ganador = "¡Ganó papel!"
//     }
//     return ganador
// }