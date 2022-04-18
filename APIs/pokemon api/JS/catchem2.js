document.querySelector('.search_button').addEventListener("click", getPokemon);

let pokeName = document.querySelector('#pokemon_entry').value;

let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

//Intended to store the object obtained from pokemon endpoint
let pokeData = undefined;

//Stores object returned from species endpoint 
let speciesData = {};

//Hit the API for the pokemon info
function getPokemon() {
    
    fetch(url) // Request pokemon by name
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            let sprite = data.sprites.other["official-artwork"].front_default

            document.querySelector('#name').textContent = data.name
            
            pokeData = data;
            console.log(pokeData)

            //Gets image from returned data and displays on screen
            document.querySelector('.screen').innerHTML = 
            `<img id="sprite" 
            src="${sprite}"
            alt="${data.name}">`

            let id = data.id
            let urlB = `https://pokeapi.co/api/v2/pokemon-species/${id}/`

            
            
            //Now pokemon-species endpoint, contains 
            //pokemon description 
            return fetch(urlB)

            
        })
            .then(response => response.json())
            .then(dataB => {
            
            speciesData = dataB;


            //console.log(dataB.flavor_text_entries[0].flavor_text)

            document.querySelector('.poke_desc').textContent = dataB.flavor_text_entries[0].flavor_text

            //console log the evolution chain: 
            console.log(speciesData)

        });
}

console.log(speciesData)
