PokeAPI lab
For this lab lets create our own Pokedex by making an Axios call to the PokeAPI! Lets first create an html file, attach in our JS Script file and the Axios library, and enter in a search bar and button to submit in our API call We can put in some empty HTML elements as well to populate with our response data, in this case just an H2 and an Image, but we can put in as much as we want once we get our calls made. Scaffold in a CSS file to add some style once the data is rendered on screen too!

You may need to Map through and run some conditionals for some peices of information (abilities, types...) if you want to put in additional peices of API data

<form>
    <input type="text"  value="" placeholder="Enter text here"  id="inputBar">
    <input type="button"  value="Click here" id="searchButton">
</form>

<h2 id="pokemonName"> </h2>
<img id="pokemonImage"/>
We'll need to Get some DOM elements, then run our Axios call to make the API call. Once we have our data pulled and logged, we can render it on screen. By wrapping our function up in a button's callback, we will only trigger it when the button is clicked, and the input is entered

let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let textInput = document.querySelector("#inputBar").value
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")


    //Axios call goes here
    //remember to use Await!
    //DOM Setters go here

})
