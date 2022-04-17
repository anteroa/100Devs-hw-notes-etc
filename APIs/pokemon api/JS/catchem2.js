document.querySelector('.search_button').addEventListener("click", getPokemon);

let pokeName = ""

let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

//Hit the API for the pokemon info
function getPokemon() {
    
    pokeName = document.querySelector('#pokemon_entry').value;

    fetch(url) // Request pokemon by name
        .then(response => response.json())
        .then(data => {
            console.log(data.name)

            document.querySelector('#name').textContent = data.name


            //Gets image from returned data and displays on screen
            document.querySelector('.screen').innerHTML = 
            `<img id="sprite" 
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="${data.name}">`

            let id = data.id
            let urlB = `https://pokeapi.co/api/v2/pokemon-species/${id}/`

            //Now pokemon-species endpoint, contains 
            //pokemon description 
            return fetch(urlB)
        })
            .then(response => response.json())
            .then(dataB => {
            
            //console.log(dataB.flavor_text_entries[0].flavor_text)

            document.querySelector('.poke_desc').textContent = dataB.flavor_text_entries[0].flavor_text

        });
}