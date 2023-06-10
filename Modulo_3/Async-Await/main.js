// https://rickandmortyapi.com/api/character

const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const promise = await response.json()
    return promise
}

getCharacters().then(data => console.log(data))