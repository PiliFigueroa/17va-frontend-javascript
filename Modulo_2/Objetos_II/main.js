/* INICIO DEL REPASO */

const person = {
    fullname: "Pilar Figueroa"
}

// console.log(person)
// person.fullname = "Micaela Ferrarese"
// console.log(person)

// delete person.fullname
// console.log(person)

// const property = "fullname"
// console.log(person[property])

const user1 = {
    firstname: "German",
    lastname: "Garmendia",
    age: 34
}

const user2 = {
    firstname: "Fernanda",
    lastname: "Santos",
    age: 24
}

// for (const key in user1) {
//     document.querySelector(".list").innerHTML += `<li>${user1[key]}</li>`
// }

const showFullname = (user) => {
    return `${user.firstname} ${user.lastname}`
}

const ageInTheFuture = (user, age) => {
    return user.age + age
}

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

// console.log(estudiantes[0].nombreCompleto.apellido)

// for (const estudiante of estudiantes) {
//     console.log(`${estudiante.nombreCompleto.nombre} ${estudiante.nombreCompleto.apellido}`)
// }

/* FIN DEL REPASO */

// Object Date => 0 Enero - 11 Diciembre

const $ = (selector) => document.querySelector(selector)

// const currentDate = new Date()
// const date = new Date("1996-11-08")

// console.log(date)

// getDay => 0 Sunday - 6 Saturday
// console.log(date.getDay())

// getDate() => 1 - 31
// console.log(date.getDate())

// getMonth() => 0 - 11
// console.log(date.getMonth())

// getFullYear() => año completo
// console.log(date.getFullYear())

// const legalAge = new Date("2006")

// $("#date").addEventListener("blur", (e) => {
//     const userDate = new Date(e.target.value)
//     if (legalAge.getFullYear() > userDate.getFullYear()) {
//         console.log("Sos mayor")
//     } else {
//         console.log("Sos menor")
//     }
// })