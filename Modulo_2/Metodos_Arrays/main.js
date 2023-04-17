// const numbers = [20, -3, 17, 5, 48, -10]

// Filter => Nos permite crear un array nuevo a partir de otro, pero solo guardar aquellos elementos que cumplen con una condicion dada
// const arePositive = numbers.filter(number => {
//     if (number > 0) {
//         return true
//     }
//     return false
// })

// const arePositive2 = numbers.filter(number => {
//     return number > 0
// })

// const arePositive3 = numbers.filter(number => number > 0)

// console.log(arePositive)
// console.log(arePositive2)
// console.log(arePositive3)

// Map => Devuelve un array nuevo en base al original, con LA MISMA CANTIDAD de elementos que el array original pero se le puede hacer alguna modificacion.

// const duplicatedNumbers = numbers.map(number => number * 2)
// console.log(duplicatedNumbers)

// const scores = [25, 100, 400, 250, 125, 175]

// En el map si usamos una condicion, es importante recordar que SIEMPRE hay que retornar algo porque sino guardaremos undefineds en nuestro array.
// const bonusScore = scores.map(score => {
//     if (score >= 200) {
//         return score + 50
//     }
//     return score
// })

// console.log(bonusScore)

// Find => Devuelve un solo elemento, y es aquel que cumpla con una condicion dada
// const oddNumber = numbers.find(number => number % 2 !== 0)
// console.log(oddNumber)

// Some => Devuelve true o false si al menos un elemento del array cumple con una condicion dada
// const thereArePositiveNumbers = numbers.some(number => number > 0)
// console.log(thereArePositiveNumbers)

// Every => devuelve true o false si TODOS los elementos cumplen con una condicion dada
// const areAllPositive = numbers.every(number => number > 0)
// console.log(areAllPositive)

// Sort => Sirve para ordenar arrays

const fruits = ["Watermelon", "Apple", "Orange"]
const numbers = [20, -3, 17, 5, 48, -10]

// Para ordenar numericamente
// a - b ordena de menor a mayor
// b - a ordena de mayor a menor

// Para ordenar alfabeticamente
// a < b return -1, a > b return 1, sino return 0 => ordena A/Z
// a < b return 1, a > b return -1, sino return 0 => ordena Z/A

console.log(numbers.sort((a, b) => a - b))
console.log(numbers.sort((a, b) => b - a))

console.log(fruits.sort((a, b) => {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
}))

console.log(fruits.sort((a, b) => {
    if (a < b) {
        return 1
    }
    if (a > b) {
        return -1
    }
    return 0
}))

const users = [
    {
        name: "Juan Pablo",
        profession: "Developer",
        salary: 200000
    },
    {
        name: "Miriam Alonso",
        profession: "QA",
        salary: 180000
    },
    {
        name: "Agostina Tevez",
        profession: "Technical Leader",
        salary: 230000
    },
    {
        name: "Kevin Lobos",
        profession: "Functional Analyst",
        salary: 190000
    }
]

// console.log(users.sort((a, b) => a.salary - b.salary))
// console.log(users.sort((a, b) => b.salary - a.salary))

console.log(users.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
}))

// reduce()