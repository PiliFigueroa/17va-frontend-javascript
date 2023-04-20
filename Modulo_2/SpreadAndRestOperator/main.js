// Rest operator => me permite definir una funcion para que reciba una cantidad X de parametros y me los devuelve como un array

const sumar = (a, b) => a + b

sumar(5, 15) // 20

// const sumarConRestOperator = (...numeros) => {
//     let sumaTotal = 0
//     for (const numero of numeros) {
//         sumaTotal += numero
//     }
//     return sumaTotal
// }

// console.log(sumarConRestOperator(10, 5, 15, 22, 45))

// Copying a variable

const person = {
    fullname: "Pilar Figueroa",
    location: "Ushuaia"
}

// const copyPerson = person

// person.fullname = "Micaela Ferrarese"

// console.log(copyPerson)

// Spread operator

// console.log(person)
// const copyPerson = {...person, location: "Argentina"}
// console.log(copyPerson)

// const frutas = ["banana", "manzana"]
// const verduras = ["espinaca", "cebolla"]

// const copyFrutasYVerduras = [...frutas, "pomelo", ...verduras]

// copyFrutas.push("tomate")

// console.log(copyFrutasYVerduras)

const estudiantes = [
    {
        edad: 17,
        familiar: "Salamandra",
        casa: "Hufflepuff",
        nombreCompleto: {
            nombre: "Ellis",
            apellido: "Reeves"
        },
        hechizoPreferido: "Expecto Patronum"
    },
    {
        edad: 15,
        familiar: "Salamandra",
        casa: "Gryffindor",
        nombreCompleto: {
            nombre: "Neal",
            apellido: "Spence"
        },
        hechizoPreferido: "Lumos"
    },
    {
        edad: 17,
        familiar: "Sapo",
        casa: "Slytherin",
        nombreCompleto: {
            nombre: "Lucy",
            apellido: "Talley"
        },
        hechizoPreferido: "Expelliarmus"
    },
    {
        edad: 21,
        familiar: "Lechuza",
        casa: "Slytherin",
        nombreCompleto: {
            nombre: "Gloria",
            apellido: "Woods"
        },
        hechizoPreferido: "Lumos"
    },
    {
        edad: 20,
        familiar: "Sapo",
        casa: "Gryffindor",
        nombreCompleto: {
            nombre: "Sharp",
            apellido: "Collier"
        },
        hechizoPreferido: "Lumos"
    }
]

const refactorizarEstudiantes = estudiantes.map(estudiante => {
    const nombreCompleto = `${estudiante.nombreCompleto.nombre} ${estudiante.nombreCompleto.apellido}`
    return {...estudiante, nombreCompleto}
})

console.log(refactorizarEstudiantes)

const location = "Argentina"
const nombre = "Pilar Figueroa"

const persona = {
    location,
    nombre
}

console.log(persona)