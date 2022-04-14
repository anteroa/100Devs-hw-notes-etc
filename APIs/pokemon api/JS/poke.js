document.querySelector('.search_button').addEventListener("click", getPokemon);

//Need a pokemon object with methods to do API calls and properties to store the calls
class makePokemon {
    constructor(pokemonName, characteristics, type, evoChain){
        this.pokemonName = pokemonName;
        this.characteristics = characteristics;
        this.type = type;
        this.evoChain = evoChain;
    }

    getPokemon(){
        //call the getPokemon function and get API data
        const pokeName = document.querySelector('#pokemon_entry').value;

        fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokeName}`
            )
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

        //Gets other info to populate the right side of the dex
    })
        
        
    }

    getType(){
        //
    }



}

