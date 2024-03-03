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
            const optionValue = document.createElement("option");
            let lower = pokeName.toLowerCase();
            optionValue.value = lower;
            pokeList.appendChild(optionValue).textContent = pokeName;

          }
    })
