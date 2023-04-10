// Callback => Es una funcion pasada como parametro a otra funcion

// setTimeout => es una funcion que ya viene con javascript que me permite ejecutar una funcion luego de un tiempo que difinimos nosotros

// setInterval

// const saludar = () => alert("Hola bienvenidas")

// setTimeout(saludar, 2000)

// setTimeout(() => {
//     alert("Hola bienvenidas")
// }, 2000)

/*
* Crear una función `map` que acepte un array y un callback y que: 
    - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento 
    - obtenga el resultado
    - lo pushee a un nuevo array
    - devuelva el array final con el resultado de cada una de las llamadas al callback. 
*/

// const nombres = ["Florencia", "Indra", "Veronica", "Rocio", "Micaela"]
// const agregarApellido = (nombre) => `${nombre} Ada`

//const numeros = [1, 2, 3]
const duplicar = x => x * 2

// Creo la funcion que me pide el ejercicio con sus argumentos, un array y una funcion (callback)
const map = (array, callback) => {
    // Como tengo que devolver un array nuevo, lo preparo como array vacio
    const numerosDuplicados = []
    // Itero por el array que recibo por parametro
    for (const elemento of array) {
        // Guardo el resultado del duplicar (callback) para despues meterlo en el array vacio
        const resultado = callback(elemento)
        numerosDuplicados.push(resultado)
    }
    // Retorno el array con los resultados nuevos
    return numerosDuplicados
}

// map(numeros, duplicar) // [2, 4, 6]
// map(nombres, agregarApellido)

/*
Crear una función filter que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
si dicho callback devuelve true, pushea el elemento a un nuevo array
devuelva el array final con los elementos que pasaron el "filtro".
*/

// condicion ? pasa esto : pasa esto otro
// Circuito corto => condicion && pasa esto

const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0

// const nombres = ["Florencia", "Indra", "Veronica", "Rocio", "Micaela"]
// const contieneLetraA = (nombre) => nombre.includes("a")

const filter = (array, callback) => {
    const numerosFiltrados = []
    for (const elemento of array) {
        // callback(elemento) ? numerosFiltrados.push(elemento) : null
        callback(elemento) && numerosFiltrados.push(elemento)
    }
    return numerosFiltrados
}

filter(numeros, multiploDe10) // [10, 40, 50]