let optionList = []; 
fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    .then(response => {
        return response.json();
    })
    .then(pokeData => {
        let pokeArray = pokeData.pokemon;
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
            pokeList.appendChild(document.createElement("option")).textContent = pokeName;
          }
    })
 
    

    // .then()
    //     pokeImg.src = pokeData.TODO;
    //     pokeImg.onload = function () {
    //         for ( let i = 0; i < TODO; i++)
    //         {
    //             let dx = ;
    //             let dy = ;
    //             cx.drawImage(patternImg, dx, dy);
    //         }
                   
    //     }
    // })