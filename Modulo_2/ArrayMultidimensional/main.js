// indice - posicion - index

// Como recorrer un array multidimensional?
// Es un array con uno o mas arrays adentro

// id

const personas = [
    [0, "Pablo", 37, "Programador", "Argentina"],
    [1, "Juliana", 23, "Abogada", "Argentina"],
    [2, "Gonzalo", 45, "Medico Clinico", "Venezuela"]
]

console.log(personas[1][1])

for (const persona of personas) {
    // console.log(persona)
    for (const dato of persona) {
        console.log(dato)
    }
}