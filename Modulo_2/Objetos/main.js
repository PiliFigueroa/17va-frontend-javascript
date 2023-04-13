// OBJETOS => Es un tipo de dato {} (llaves)

// PARTE 1

// 1A => Sintaxis y creacion, acceso a propiedades con notacion de punto
// key: value
// key, property, propiedad, clave

const person = {
    fullname: "Pilar Figueroa",
    profession: "Developer",
    age: 26,
    hasExperience: true,
    languages: ["HMTL", "CSS", "Javascript", "React", "Twig", "Python"]
}

// Creando propiedades
// person.pets = ["Poroto", "Morena"]

// Eliminando propiedades
// delete person.hasExperience

// console.log(person.fullname)
// console.log(person.profession)
// console.log(person.age)
// console.log(person.hasExperience)
// console.log(person.languages)
// console.log(person.pets) // Devuelve undefined porque no existe la propiedad pets dentro de person
// console.log(fullname) // No puedo acceder a fullname sin entrar en person

// 1B => Funciones dentro de objetos

const books = {
    titles: [],
    addBook: (title) => books.titles.push(title),
    yell: () => alert("ESTOY GRITANDO")
}

// console.log(books)

// books.addBook("Los juegos del hambre")
// books.addBook("Harry Potter")
// books.addBook("El alquimista")

// console.log(books.titles[2])

// PARTE 2 => Acceso a propiedades con notacion de corchete
// Objetos dinamicos

const property = "languages"
const property2 = "pets"

// console.log(person[property2])
// console.log(person["fullname"])
// console.log(person["profession"])
// console.log(person["age"])
// console.log(person["hasExperience"])
// console.log(person[property])
// console.log(property)

// const showValue = (property) => console.log(person[property])
// showValue(property)

// PARTE 3 => Object.keys - Object.values = Object.entries

// El objeto no es iterable, forof no anda de esta manera
// for (const property of person) {
//     console.log(property)
// }

// Con el forin recorro las keys de mi objeto y con la notacion de corchete accedo a los valores de las keys
// for (const key in person) {
//     console.log(person[key])
// }

// const showElement = (element) => element.style.display = "block"
// const hideElement = (element) => element.style.display = "none"

// const changeStyles = (element, property, value) => element.style[property] = value

// Object.keys() => Recibe un objeto y devuelve un array con las keys del objeto
// console.log(Object.keys(person))

// Object.value() => Recibe un objeto y devuelve un array con los values del objeto
// console.log(Object.values(person))

// Object.entries()
// console.log(Object.entries(person))

// const keys = Object.keys(person) // array con las keys
// const values = Object.values(person) // array con los values

// for (const key of keys) {
//     // accedo a los valores del objeto person a partir de recorrer el array de keys - ES LO MISMO QUE EL FOR IN ANTERIOR
//     if (key !== "age") {
//         console.log(person[key])
//     }
// }

// for (const value of values) {
//     console.log(value)
// }

// hasOwnProperty => pregunta si existe la propiedad dada en dicho objeto
// console.log(person.hasOwnProperty("pets"))

// PARTE 4 => Array de objetos

const usuarios = [
    {
        id: 1,
        nombre: "Pilar Figueroa",
        profesion: "Programadora",
        edad: 26,
        tieneExperiencia: true,
        lenguajes: ["Javascript", "PHP", "ReactJS"] 
    },
    {
        id: 2,
        nombre: "Micaela Ferrarese",
        profesion: "Programadora",
        edad: 31,
        tieneExperiencia: true,
        lenguajes: ["Javascript", "ReactJS"]
    },
    {
        id: 3,
        nombre: "Veronica Guiñan",
        profesion: "Ingeniera Mecatronica",
        edad: 29,
        tieneExperiencia: false,
        lenguajes: ["Javascript"]
    }
]

// console.log(usuarios) // array
// console.log(usuarios[0]) // objeto
// console.log(usuarios[0].nombre) // string

// for (const usuario of usuarios) {
//     console.log(usuario.nombre)
// }

// Hago un acumulador para sumar las edades
// let acc = 0
// // Itero por el array de usuarios para acumular las edades en mi variable inicial
// for (const usuario of usuarios) {
//     // Sumo y acumulo edades
//     acc += usuario.edad
// }

// // Saco el promedio dividiendo por el length (longitud) de mi array y redondeo
// const promedio = Math.round(acc / usuarios.length)
// console.log(promedio)

const $ = (selector) => document.querySelector(selector)

if (usuarios.length > 0) {
    for (const usuario of usuarios) {
        $("#table").innerHTML += `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.profesion}</td>
                <td>${usuario.edad}</td>
                <td class="${usuario.tieneExperiencia ? "text-success" : "text-danger"}">${usuario.tieneExperiencia ? "Si" : "No"}</td>
                <td>${usuario.lenguajes.join(", ")}</td>
            </tr>
        `
    }
} else {
    $(".table").style.display = "none"
}