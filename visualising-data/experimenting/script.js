let pokeArray = [];
let optionList = [];
let imageList = []

// const cx = document.querySelector("canvas").getContext("2d");
const pokeImg = new Image();

// let canvasWidth = 800;
// let canvasHeight = 600;


// cx.canvas.width = canvasWidth;
// cx.canvas.height = canvasHeight;

fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    .then(response => {
        return response.json();
    })
    .then(pokeData => {
        pokeArray = pokeData.pokemon;
        for (const pokemon of pokeArray) {
            optionList.push(pokemon.name);
            let pokeImageObj = { ["pokemonName"]: pokemon.name, ["img"]: pokemon.img };
            imageList.push(pokeImageObj);
        }

    })
    .then(sortOptions => {
        optionList.sort();
        // console.log(optionList);
    })
    .then(populateOptions => {
        //populate the select dropdown with pokemon names.
        const pokeList = document.querySelector("select");
        for (pokeName of optionList) {
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
    setPokeImageSrc(pokeChoice, imageList);
}

// TODO find the pokemonName & return the object
// function depends on successful fetch populating pokeSelect values. 

// then set pokeImage.src to img url
function setPokeImageSrc(pokemonName, imageList) {
    console.log(`called setPokeImageSrc with ${pokemonName} & ${imageList.length}`);
    for (const pokemon of imageList) {
        if (pokemon.pokemonName == pokemonName) {
            console.log(imageList);
            let srcImage = pokemon.img;
            console.log(`src value is ${srcImage}`);
            // pokeImg.src = srcImage;
            // console.log(pokeImg);
            document.getElementById("pokeImage").src = srcImage;
            // pokeImg.onload = function () {
            // cx.drawImage(srcImage, 10, 10);
            // }

        }
    }
}