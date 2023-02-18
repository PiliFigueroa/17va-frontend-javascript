// Condicionales
// if else

/*
Segun una condicion... pasa esto. Sino... pasa lo otro.
*/

// if (condicion) {
//     // bloque de codigo que se ejecuta si la condicion se cumple
// }

// Existen ciertos tipos de datos que equivalen a true y otros a false

// let number = 10
// let firstname = ""

// Con strings la condicion se cumple, es decir, da true
// if (firstname) {
//     console.log("Se cumplio la condicion")
// }

// Si el string esta vacio, no se cumple porque firstname.length = 0 y 0 es un falsy
// if (firstname) {
//     console.log("Se cumplio la condicion")
// }

// true = 1
// false = 0

// Con numbers, si tenemos un numero positivo o negativo la condicion se cumple (truthy) y si el number es 0 la condicion NO se cumple (falsy)

// if (number) {
//     console.log("La condicion se cumplio")
// }

// number = 0
// if (number) {
//     console.log("La condicion se cumplio")
// }

// let boolean = true

// if (boolean) {
//     console.log("Me ejecute")
// }

// let indefinido = undefined
// El undefined da falsy
// if (indefinido) {
//     console.log("Me ejecute")
// }

// let nulo = null
// // El null da false
// if (nulo) {
//     console.log("Me ejecute")
// }

// El NaN es un falsy
// if (NaN) {
//     console.log("Me ejecute")
// }

/*
- Numbers: Si tengo cualquier numero que no sea 0, mi condicion se cumple. Porque false = 0 y true = 1.
- Strings: Si tengo un string vacio devuelve false. Pero si tengo cualquier otro dato entre comillas si da true.
- True y false.
- Undefined: devuelve false
- Null: devuelve false
- NaN: defuelve false
*/

// if (condition) {
//     // esto de aca
// } else {
//     // se ejecuta esto otro
// }

// Operadores de comparacion
// Comparar un dato contra otro y eso nos puede devolver true o false y usarlo en los condicionales

/*
== igualdad
=== igualdad estricta
!= distinto de
!== distinto estricto
< menor que
> mayor que
<= menor o igual
>= mayor o igual
! negacion
*/

// let numero1 = 10
// let numero2 = 20
// let numeroString = "10"

// console.log(numero1 == numero2) // false 10 no es igual que 20
// console.log(numero1 == numeroString) // true compara solo el valor y no el tipo
// console.log(numero1 === numeroString) // false compara tambien el tipo de dato
// console.log(numero1 != "10") // false porque solo compara valor
// console.log(numero1 != numero2) // true porque son valores distintos
// console.log(numero1 != 10) // false porque no son distintos
// console.log(numero1 !== "10") // true porque son distintos en su tipo
// console.log(numero1 !== numero2) // true, son distintos valores
// console.log(numero1 !== 10) // false, son igualitos
// console.log(numero1 > numero2) // false
// console.log(numero1 < numero2) // true
// console.log(numero1 >= numero2) // false
// console.log(numero1 <= numero2) // true
// console.log(numero1 <= numeroString) // true

// let string = "Hola"
// let stringVacio = ""
// let nulo = null
// let indefinido = undefined
// let verdadero = true
// let falso = false
// let positivo = 5
// let negativo = -4
// let neutro = 0
// let noNumero = NaN

// console.log(!string) // false
// console.log(!stringVacio) // true
// console.log(!nulo) //true
// console.log(!indefinido) //true
// console.log(!verdadero) // false
// console.log(!falso) // true
// console.log(!positivo) // false
// console.log(!negativo) // false
// console.log(!neutro) // true
// console.log(!noNumero) // true

// if (string === "hola") {
//     console.log("Me ejecute")
// }

// let nombre = prompt("Ingrese su nombre:")

// if (nombre.toLowerCase() === "pedro") {
//     alert("Hola Pedro!!!")
// } else {
//     alert("No se quien sos")
// }

// elseif

// let condicion = true
// let condicion2 = true

// if (condicion) {
//     // si se cumple la condicion se ejecuta este bloque
//     console.log("Cai en el if")
// } else if (condicion2) {
//     // si se cumple la condicion 2 se ejecuta este bloque
//     console.log("Cai en el else if")
// } else {
//     // se ejecuta solamente si ninguna condicion se cumple
//     console.log("Cai en el else")
// }

// let condicion = true
// let nombre = ""

// if (condicion) {
//     nombre = "Pilar"
// }

// console.log(nombre)

// let esElCumple = true
// let edad = 17

// if (esElCumple) {
//     edad++
// }

// if (edad >= 18) {
//     alert("Podes manejar!!")
// }

// let nombre = prompt("Ingrese su nombre:")

// if (nombre) {
//     console.log(`Hola ${nombre}`)
// }

/*
- Crear un programa que calcule la suma de dos numeros, valide el resultado
y retorne verdadero si el resultado es positivo, o retorne falso si el
 resultado es negativo
*/

// const esSumaMayorQueCero = (a, b) => {
//     const resultado = a + b
//     // console.log(resultado)
//     if (resultado === 0) {
//         return "Es nulo"
//     }
//     if (resultado > 0) {
//         return true
//     } else {
//         return false
//     }
// }

/*
- Crear un programa que reciba un numero e identifique si es par o impar
*/
// Para saber si un numero es par, es que es divisible por 2 y el resto es 0
// console.log((numero % 2) === 0)

// const esParOImpar = (number) => {
//     if ((number % 2) === 0) {
//         return "Es par"
//     } else {
//         return "Es impar"
//     }
// }

/*
- Crear un programa que reciba un nombre, y si es Pedro que muestre por consola un mensaje de saludo, y si no es pedro que diga "No sos pedro"
*/

// const saludarSiEsPedro = (nombre) => {
//     let mensaje = ""
//     if (nombre.toLowerCase() === "pedro") {
//         mensaje = "Hola Pedro, como estas?"
//     } else {
//         mensaje = "No sos Pedro, mentiroso"
//     }
//     return mensaje
// }

/*
- Crear un programa que reciba una contrasena y valide si su longitud es mayor o igual a 8 caracteres. Si no es mayor, solicitar que ingrese de nuevo la contrasena
*/

// Recursividad => volver a ejecutar una funcion dentro de si misma

// const password = prompt("Ingrese su contrasena:")

// const validatePassword = (password) => {
//     if (password.length >= 8) {
//         return true
//     } else {
//         password = prompt("Ingrese su contrasena:")
//         validatePassword(password)
//     }
// }

// validatePassword(password)