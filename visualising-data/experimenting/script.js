let pokeArray = [];
let optionList = [];
const cx = document.querySelector("canvas").getContext("2d");
const pokeImg = new Image();

let canvasWidth = 800;
let canvasHeight = 600;


cx.canvas.width = canvasWidth;
cx.canvas.height = canvasHeight;

fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    .then(response => {
        return response.json();
    })
    .then(pokeData => {
        pokeArray = pokeData.pokemon;
        for (const pokemon of pokeArray)
        {
            optionList.push(pokemon.name);
        }
    })
    .then(sortOptions => {
        optionList.sort();
        // console.log(optionList);
    })
    .then(populateOptions => {
          //populate the select dropdown with pokemon names.
          const pokeList = document.querySelector("select");
          for (pokeName of optionList)
          {
            const optionValue = document.createElement("option");
            optionValue.value = pokeName;
            pokeList.appendChild(optionValue).textContent = pokeName;

          }
    })

let form = document.querySelector("form");

form.addEventListener("submit", pickPoke)

function pickPoke(e) {
    e.preventDefault()
    let pokeSelect = form.querySelector("#pokeSelect")
    // console.log(pokeSelect);
    let pokeChoice = pokeSelect.value;
    // console.log(pokeChoice);
    pokeImage(pokeChoice);
}

// function depends on successful fetch populating pokeSelect values.
function pokeImage(pokemonName) {
    console.log(`pokeImage called with ${pokemonName}.`);
    console.log(pokeArray);
    // TODO loop the array until pokemomName is equivalent to pokemon.name 
    // then set pokeImage.src to img url
    // then onload check the img dimensions
    // then set the canvas to fit the image
    // then draw the image on the canvas

}