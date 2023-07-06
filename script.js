// Element selectors
let button = document.querySelector("#searchButton");
let pokemonName = document.querySelector("#pokemonName");
let pokemonImage = document.querySelector("#pokemonImage");


// Event handlers
function getPokemon() {
    const input = document.querySelector("#inputBar").value;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(function (response) {
            // Successful response
            console.log(response);
            returnPokemonName = response.data.name;
            console.log(returnPokemonName);
            returnPokemonImage = response.data.sprites.front_default;
            // Update the DOM
            document.querySelector("#pokemonName").innerText = `${returnPokemonName}`;
            document.querySelector("#pokemonImage").src = `${returnPokemonImage}`;              
        })
        .catch(function (error) {
            // Error response
            console.log(error);
        });
};


// Event listeners


button.addEventListener('click', async () => {
    getPokemon();
})