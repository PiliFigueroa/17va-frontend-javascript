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

// Destructuring => sugar syntax - "extraer" las propiedades de un objeto que nos interesan

const person = {
    fullname: "Pilar Figueroa",
    age: 26,
    profession: "Teacher"
}

// const { fullname, age, profession } = person

// console.log(profession)
// console.log(fullname)
// console.log(age)

// for (const estudiante of estudiantes) {
//     const { familiar, casa, hechizoPreferido } = estudiante
//     console.log(familiar)
//     console.log(casa)
//     console.log(hechizoPreferido)
// }

// for (const { familiar, casa, hechizoPreferido } of estudiantes) {
//     console.log(familiar)
//     console.log(casa)
//     console.log(hechizoPreferido)
// }

// const amigos = ["Pablo", "German"]

// console.log(amigos[0])
// console.log(amigos[1])

// const [a, b] = amigos

// console.log(a)
// console.log(b)

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

const niceSalary = users.filter(user => {
    const { salary } = user
    return salary >= 200000
})

const niceSalary2 = users.filter(({ salary }) => salary >= 200000)

// console.log(niceSalary)
// console.log(niceSalary2)