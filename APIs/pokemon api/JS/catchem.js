document.querySelector('.search_button').addEventListener("click", getPokemon);

function getPokemon(){
    const pokeName = document.querySelector('#pokemon_entry').value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(res => res.json())
    .then(data => {
        //Gets image from returned data and displays on screen
        document.querySelector('.screen').innerHTML = 
        `<img 
        id="sprite" 
        src="${data.sprites.other["official-artwork"].front_default}"
        alt="${data.name}">`

        //Gets other info to populate the right side of the dex
        document.querySelector('.dex_results').innerHTML = 
        `<h2 id="evo_chain">${data.name}'s evolution chain:</h2>
        <img src="${data.}" alt="">
        `
    })
}