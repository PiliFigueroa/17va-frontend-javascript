// https://pokeapi.co/api/v2/pokemon/

const $ = (selector) => document.querySelector(selector)

const getPokemon = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(res => res.json())
        .then(pokemon => renderPokemon(pokemon))
        .catch(() => renderError())
}

const renderPokemon = (pokemon) => {
    const { name, sprites: { front_default, back_default }, types, stats } = pokemon
    $("#pokemon-container").innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${front_default}" class="card-img-top pokemon-image" alt="${name}">
            <div class="card-body">
                <h5 class="card-title capitalize">${name}</h5>
                <p class="card-text"><b>Main Type:</b> ${types[0].type.name}</p>
                <p class="card-text"><b>HP:</b> ${stats[0].base_stat}</p>
                <p class="card-text"><b>Attack:</b> ${stats[1].base_stat}</p>
                <p class="card-text"><b>Defense:</b> ${stats[2].base_stat}</p>
            </div>
        </div>
    `
    $(".pokemon-image").addEventListener("mouseover", () => {
        $(".pokemon-image").src = back_default
    })
    $(".pokemon-image").addEventListener("mouseout", () => {
        $(".pokemon-image").src = front_default
    })
}

const renderError = () => {
    $("#pokemon-container").innerHTML = `
        <div class="alert alert-danger" role="alert">
            Please type properly the pokemon name
        </div>
    `
}

$("#search-btn").addEventListener("click", () => {
    getPokemon($("#keyword").value)
})