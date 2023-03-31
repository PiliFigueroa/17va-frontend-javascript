const amigos = ["Eliana", "Guadalupe", "Nicolas", "Pamela"]

// const mostrarAmigos = (amigos) => {
//     for (const amigo of amigos) {
//         console.log(amigo)
//     }
// }

// mostrarAmigos(amigos)

// Recorra el array que reciba por argumento y retorne un string con la primer letra de cada nombre

const primeraLetra = (amigos) => {
    let letras = ""
    for (const amigo of amigos) {
        letras += amigo[0]
    }
    return letras
}

// Crear una funcion que reciba un array de numeros y retorne el mismo pero con los numeros multiplicados por dos

const duplicarNumeros = (numeros) => {
    let numerosDuplicados = []
    for (const numero of numeros) {
        numerosDuplicados.push(numero * 2)
    }
    return numerosDuplicados
}

// Crear una funcion que reciba un array de puntajes, y si el puntaje es superior o igual a 200, entonces agregarle un bonus de 50.

const puntajes = [100, 145, 200, 220, 25, 300]

const puntajeBonus = (puntajes) => {
    let nuevosPuntajes = []
    for (const puntaje of puntajes) {
        if (puntaje >= 200) {
            nuevosPuntajes.push(puntaje + 50)
        } else {
            nuevosPuntajes.push(puntaje)
        }
    }
    return nuevosPuntajes
}