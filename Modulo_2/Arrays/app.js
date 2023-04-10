// Arrays => tipo de dato que puede almacenar varios datos dentro de si mismo
// const genericArray = [26, "Hola", true, undefined, null, false]
// const emptyArray = []

let kiwi = "Kiwi"

// Mutabilidad - Inmutabilidad
const fruits = ["Apple", "Banana", "Watermelon"]

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits.length)

// funciones nativas de arrays

// push => agregar un elemento a un array y siempre lo pone al final
// fruits.push(kiwi)
// console.log(fruits)

// fruits.push("Pineapple")
// console.log(fruits)

// shift => elimina el primer elemento de mi array
// fruits.shift()
// console.log(fruits)

// pop => elimina el ultimo elemento de mi array
// fruits.pop()
// console.log(fruits)

// unshift => agrega uno o mas elementos al principio de mi array
// fruits.unshift("Kiwi", "Pineapple")
// console.log(fruits)

// slice => corta un array a partir del indice dado, y si le pasamos dos indices toma el primer argumento como el inicio y el segundo argumento como el final
// console.log(fruits.slice(1))
// console.log(fruits.slice(0, 2))

// splice => remover o reemplazar elementos, el primer argumento es el indice del elemento que queremos reemplazar, el segundo argumento es la cantidad, y el tercer argumento es por que cosa lo reemplazo
// fruits.splice(1, 2, "Kiwi")
// console.log(fruits)

// concat => toma dos arrays y los convierte en uno solo, es una nueva variable
const vegetables = ["Beans", "Lettuce", "Carrot", "Potato"]
const greenGrocery = fruits.concat(vegetables)
// console.log(greenGrocery)

// join => toma un array y te devuelve un string concatenado con lo que recibe por parametro
// console.log(fruits.join())
// console.log(fruits.join(""))
// console.log(fruits.join(" "))
// console.log(fruits.join("-"))
// console.log(fruits.join("/"))

// funcion nativa de string pero sirve para convertir a array
// split => separa un string a partir del parametro dado
// const names = "Pilar Veronica Solange Marian Rocio Sharime"
// console.log(names.split(" "))

// Como obtener un elemento aleatorio de un array

const randomElement = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

// console.log(randomElement(greenGrocery))
// console.log(randomElement(greenGrocery))
// console.log(randomElement(greenGrocery))
// console.log(randomElement(greenGrocery))

const germinar = plantines => {
    let plantas = plantines.split(/(?:)/u)
    let hijo = "🌱"

    for (let i = 1; i < plantas.length; i++){
        if (plantas[i] === hijo) {
            plantas[i] = plantas[i-1]
        }
    }
    
    return plantas.join("")
}