// Element selectors
let button = document.querySelector("#searchButton");
let pokemonName = document.querySelector("#pokemonName");
let pokemonImage = document.querySelector("#pokemonImage");
let pokemonURL;

// Event handlers
function getPokemon() {
    const input = document.querySelector("#inputBar").value;
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(function (response) {
            console.log(response);
            pokemonName = response.data.forms.name;
            console.log(pokemonName);
            pokemonURL = response.data.forms.url;      
            // Update the DOM
            document.querySelector("#pokemonName").innerText = `${pokemonName}`;           
        })
        .catch(function (error) {
            // Error response
            console.log(error);
        });
    };

    axios.get(`${pokemonURL}`)
        .then(function (response) {
            console.log(response);
            pokemonImage = response.data.sprites.front_default;
            document.querySelector("#pokemonImage").innerText = `${pokemonImage}`; 
        })
        .catch(function (error) {
            // Error message
            console.log(error);
        });
    }


// Event listeners


button.addEventListener('click', async () => {
    getPokemon();
})