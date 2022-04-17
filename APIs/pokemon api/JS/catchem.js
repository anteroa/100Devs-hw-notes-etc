document.querySelector('.search_button').addEventListener("click", getPokemon);

function getPokemon(){
    const pokeName = document.querySelector('#pokemon_entry').value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(res => res.json())
    .then(data => {
        //testing
        console.log(data) 

        //Gets image from returned data and displays on screen
        document.querySelector('.screen').innerHTML = 
        `<img 
        id="sprite" 
        src="${data.sprites.other["official-artwork"].front_default}"
        alt="${data.name}">`

        //Get other info to populate the right side of the dex
        
        //Get characteristics of pokemon
        
        //Evo chain images - needs to be fixed
        document.querySelector('#evo_container').innerHTML = 
        `
        <img class="evo_node" src="${data.sprites.other["official-artwork"].front_default}"
        alt="${data.name}">
        <img class="evo_node" src="${data.sprites.other["official-artwork"].front_default}"
        alt="${data.name}">
        <img class="evo_node" src="${data.sprites.other["official-artwork"].front_default}"
        alt="${data.name}">
        `
    })
}