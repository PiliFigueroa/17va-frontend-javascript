// DOCUMENTATION https://developers.themoviedb.org/3/getting-started/introduction

// Para obtener una api key deben registrarse con un email y contrasena, solicitar la api key poniendo que son estudiantes o alguna opcion similar.

// ENDPOINTS (existen muchos mas, hoy usamos estos)
// http://api.themoviedb.org/3/movie/popular?api_key=36162ff97a309ab9150e20a5b14f5094
// http://api.themoviedb.org/3/movie/top_rated?api_key=36162ff97a309ab9150e20a5b14f5094
// http://api.themoviedb.org/3/movie/upcoming?api_key=36162ff97a309ab9150e20a5b14f5094

// Se puede agregar el parametro page &page=1 luego de la api key

/*
    Crear una app que muestre las peliculas.
    Que tenga una navegacion para acceder a las peliculas popular, top rated y upcoming, por lo tanto cada boton tiene que triggerear el endpoint respectivo.
    Crear paginacion para ver las distintas pages.
*/

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)
const cleanContainer = (selector) => $(selector).innerHTML = ''

const BASE_URL = 'http://api.themoviedb.org/3/movie/'
const API_KEY = '36162ff97a309ab9150e20a5b14f5094'

let page = 1
let current_endpoint = ""
let total_pages = 0

const getMovies = (endpoint) => {
    fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&page=${page}`)
        .then(res => res.json())
        .then(data => {
            renderMovies(data.results)
            current_endpoint = endpoint
            total_pages = data.total_pages
            renderTotalResults(data.total_results)
        })
}

const renderMovies = (movies) => {
    if (movies) {
        cleanContainer("#container-movies")
        for (const { backdrop_path, original_title, adult, overview, release_date } of movies) {
            $("#container-movies").innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                    <img src="https://image.tmdb.org/t/p/w300/${backdrop_path}" class="card-img-top" alt="${original_title}">
                    <div class="card-body">
                        <h5 class="card-title">${original_title}</h5>
                        <p class="card-text">${overview}</p>
                        <p class="card-text">${adult}</p>
                        <p class="card-text">${release_date}</p>
                    </div>
                </div>
            `
        }
    }
}

const renderTotalResults = (totalResults) => $("h6").innerHTML = totalResults

for (const btn of $$(".movie-types")) {
    btn.addEventListener("click", () => {
        const endpoint = btn.name
        getMovies(endpoint)
    })
}

$("#prev").addEventListener("click", () => {
    if (page > 1) {
        page -= 1
        getMovies(current_endpoint)
    } else {
        $("#prev").setAttribute("disabled", true)
    }
    if (page === 1) $("#prev").setAttribute("disabled", true)
    if (page < total_pages) $("#next").removeAttribute("disabled")
    $("span").innerHTML = page
})

$("#next").addEventListener("click", () => {
    if (page < total_pages) {
        page += 1
        getMovies(current_endpoint)
    }
    if (page > 1) $("#prev").removeAttribute("disabled")
    if (page === total_pages) $("#next").setAttribute("disabled", true)
    $("span").innerHTML = page
})

window.addEventListener("load", () => {
    getMovies("upcoming")
    if (page === 1) $("#prev").setAttribute("disabled", true)
    $("span").innerHTML = page
})