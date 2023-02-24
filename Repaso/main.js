/*
    let y const
    const => constante: el valor que le asignamos no puede mutar
    let => si puede mutar
*/

// Ver como retornar directamente true o false sin tener que escribir return true y return false explicitamente
// Ver esto en ejemplo con el ejercicio de puedeVerPelicula

// Crear una función `puedeVerPelicula` que tome como argumentos un número `edad` y un booleano `tieneAutorizacion`, y devuelva `true` si la persona está habilitada para ver la película o `false` si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// Que tengo? Y que necesito?

// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     if (edad >= 15 || tieneAutorizacion) {
//         return true
//     } else {
//         return false
//     }
// }

// const puedeVerPelicula2 = (edad, tieneAutorizacion) => {
//     return edad >= 15 || tieneAutorizacion
// }

// const edad = 14
// const tieneAutorizacion = false

// console.log(edad >= 15 || tieneAutorizacion)

// console.log(puedeVerPelicula2(12, false))
// console.log(puedeVerPelicula2(12, true))
// console.log(puedeVerPelicula2(16, false))
// console.log(puedeVerPelicula2(18, true))

// Doble return sin else
// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     if (edad >= 15 || tieneAutorizacion) {
//         return true
//     }
//     return false
// }

// Return implicito

// const sumar = (a, b) => {
//     return a + b
// }

// const sumar2 = (a, b) => a + b

// console.log(sumar(5, 20))
// console.log(sumar2(5, 20))

// const puedeVerPelicula3 = (edad, tieneAutorizacion) => edad >= 15 || tieneAutorizacion
            
// Ver ejercicio de esHoraValida

// Crear una función `esHoraValida` que tome como argumento un string `hora` con el formato `HH:mm` y determine si es una hora válida del día o no

// polemico => tratemos de respetar los tipos de datos
// const esHoraValida = (hora) => {
//     return hora >= "00:00" && hora <= "23:59" && hora.slice(3,4) <= 5 
// }

// const esHoraValida2 = (hora) => {
//     return parseInt(hora.slice(0, 2)) >= 0 && parseInt(hora.slice(0, 2)) <= 12 && parseInt(hora.slice(3, 5)) >= 0 && parseInt(hora.slice(3, 5)) <= 59
// }

// const esHoraValida3 = (hora) => {
//     const hh = parseInt(hora.slice(0, 2))
//     const mm = parseInt(hora.slice(3, 5))
//     return hh <= 23 && mm <= 59
// }

// console.log(esHoraValida2('12:23'))
// console.log(esHoraValida2('12:65'))
// console.log(esHoraValida2('28:05'))
// console.log(esHoraValida2('00:00'))

// charAt
// const nombre = "Pilar"
// console.log(nombre.charAt(2))

// const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1)

// Mostrar como usar dos scripts en un mismo html

// console.log(firstname)
// console.log(lastname)
// console.log(sumar(5, 10))

// Mostrar diferencias entre cargar el script en el body y en el head

/*
PRACTICA

=> ADIVINA EL NUMERO
- Crear un juego en el que se le pide al usuario adivinar un numero random del 0 al 10
- Si el usuario gana, emitir un mensaje que diga felicitaciones adivinaste. Caso contrario, lo siento perdiste.
- Ahora le subimos la dificultad. Vamos a darle al usuario tres vidas como chances de adivinar. Con cada fracaso debe restarse una vida, en caso de ganar mantener el mensaje de felicidades. Si se queda sin vidas, perdio.

*/

const numeroAleatorio = Math.round(Math.random() * 10)
let vidas = 3

const adivinaElNumero = () => {
    const numeroElegido = parseInt(prompt("Adivina un numero del 0 al 10:", 0))

    if (!isNaN(numeroElegido)) {
        if (numeroAleatorio === numeroElegido) {
            alert("Felicidades adivinaste!")
        } else {
            vidas--
            console.log(`Te quedan ${vidas} vidas`)
            if (vidas > 0) {
                adivinaElNumero()
            } else {
                alert("Lo siento, perdiste")
            }
        }
    } else {
        alert("Che gil, te dije que metas un numero")
        adivinaElNumero()
    }
}

adivinaElNumero()