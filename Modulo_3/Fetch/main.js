// fetch => devuelve una promesa - hacer peticiones a APIs
// Promises => pending, rejected, fullfilled

// APIs hay publicas y privadas
// apikey

// Methods => GET, POST, PUT, DELETE

// urlBase => https://rickandmortyapi.com/api
// endpoint => /characters

// const BASE_URL = "https://rickandmortyapi.com/api/"
// const endpoint = "character"

// Fetch recibe la url base y el endpoint al cual queremos hacer la peticion
// En el primer then, recibimos la respuesta que es una promesa, y la parseamos
// En el segundo then, finalmente llega la informacion si la promesa se cumplio, y podemos utilizarla a partir de ahora

// then, catch, finally

// Funciones auxiliares
const $ = (selector) => document.querySelector(selector)
const hideElement = (selector) => $(selector).classList.add('d-none')
const showElement = (selector) => $(selector).classList.remove('d-none')

// Peticiones
const getCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => renderCharacters(data.results))
        // .catch(error => console.log(error))
        // .finally(() => console.log("termino mi peticion"))
}

const getCharacter = (characterId) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(data => renderCharacter(data))
}

// Renders
const renderCharacters = (characters) => {
    if (characters) {
        for (const { id, name, status, species, gender, image } of characters) {
            $("#characters-container").innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="avatar-${name}">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text"><b>Status:</b> ${status}</p>
                        <p class="card-text"><b>Species:</b> ${species}</p>
                        <p class="card-text"><b>Gender:</b> ${gender}</p>
                        <a href="#" class="btn btn-primary" onclick="getCharacter('${id}')">Ver Detalle</a>
                    </div>
                </div>
            `
        }
    }
}

const renderCharacter = ({ gender, image, name, species, status }) => {
    hideElement("#characters-container")
    showElement("#character-detail-container")
    $("#character-detail-container").innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${image}" class="img-fluid rounded-start" alt="avatar-${name}">
                </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text"><b>Status:</b> ${status}</p>
                    <p class="card-text"><b>Species:</b> ${species}</p>
                    <p class="card-text"><b>Gender:</b> ${gender}</p>
                </div>
            </div>
            </div>
        </div>
    `
}

// Eventos
window.addEventListener('load', getCharacters)