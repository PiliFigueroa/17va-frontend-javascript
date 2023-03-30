// Bucles - Loop
// Con un bucle podemos establecer que un bloque de codigo se repita hasta una cantidad de veces que nosotros definimos

// For
// for (let i = 0; i < 5; i++) {
//     // Bloque de codigo que se va repetir mientras la condicion se cumpla
//     console.log(`Iteracion: ${i}`)
// }

// for (let i = 10; i > 0; i--) {
//     console.log(`Iteracion: ${i}`)
// }

// let acc = 0

// for (let i = 0; i < 10; i++) {
//     acc = acc + 5
//     console.log(acc)
// }

// for (let i = 0; i < 3; i++) {
//     console.log("Hola Pilar!")
// }

// const students = ["Luciana", "Natalia", "Sharime", "Rocio", "Gineska"]

// for (let i = 0; i < students.length; i++) {
//     console.log(`Iteracion: ${i}`, students[i])
// }

// While
// let i = 0

// while (i < 5) {
//     // Se ejecuta mientras se cumpla la condicion
//     console.log("Me ejecute")
//     i++
// }

// Do while
// let i = 0
// do {
//     console.log("Me ejecute")
//     i++
// } while (i < 5)

// For of
// const students = ["Luciana", "Natalia", "Sharime", "Rocio", "Gineska"]
// console.log(students)

// for (const student of students) {
//     console.log(student)
// }

// const amigos = ["Eliana", "Guadalupe", "Nicolas", "Pamela"]

// for (const amigo of amigos) {
//     console.log(amigo)
// }

// For in
// for (const student in students) {
//     console.log(student)
// }

// ForEach
const students = ["Luciana", "Natalia", "Sharime", "Rocio", "Gineska"]

// El foreach recorre todo mi array, recibe un callback, este callback puede tener hasta 3 parametros
// array.forEach((element, index, array) => {})
/*
    element => elemento que recorre
    index => el indice del elemento que recorre
    array => el array en si, entero
*/

// students.forEach(student => {
//     console.log(student)
// })

// students.forEach((student, index) => {
//     if (index % 2 === 0) {
//         console.log(student)
//     }
// })

/*
    Ya pueden realizar la ejercitacion de Mumuki y:
    Arrays: https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-4/42-arrays.md
    Bucles: https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-4/43-bucles.md
*/

/*
Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:
sumarNumeros([5, 7, 10, 12, 24]) // 58
*/

// const perro = [5, 7, 10, 12, 24]

// Defino una funcion que recibe como parametro un array de numeros
const sumarNumeros = (numeros) => {
    // Inicializo una variable en 0 para poder acumular la suma de esos numeros
    let sumaTotal = 0
    // Recorro este array con un forof
    for (const numero of numeros) {
        // Acumulo los numeros que recorro en esa variable que inicialice antes
        sumaTotal = sumaTotal + numero
    }
    // Finalmente retorno el acumulador
    return sumaTotal
}

console.log(sumarNumeros([5, 7, 10, 12, 24]))
console.log(sumarNumeros([5, 7, 10, 12, 24, 100, -10, 21]))
// console.log(sumarNumeros(perro))

/*
Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
*/

const contiene = (numero, arrayNumeros) => {
    return arrayNumeros.includes(numero)
}

const contiene2 = (numero, arrayNumeros) => {
    for (const num of arrayNumeros) {
        if (num === numero) {
            return true
        }
    }
    return false
}

console.log(contiene2(54, [5, 7, 99, 3, 4, 54, 2, 12])) // true
console.log(contiene2(103, [5, 7, 99, 3, 4, 54, 2, 12])) // false