//common query selector
const q_s = (sct)=> document.querySelector(sct);

document.querySelector('.search_button').addEventListener("click", getPokemon);

let pokeName = document.querySelector('#pokemon_entry').value;

function getPokemon(){
	Promise.all([
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`),
		fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeName}/`)
	]).then(function (responses) {
		// Get a JSON object from each of the responses
		return Promise.all(responses.map(function (response) {
			return response.json();
		}));
	}).then(function (data) {
		// Log the data to the console
		// You would do something with both sets of data here
		console.log(data);
	

		//get pokemon image 
		let sprite = data[0].sprites.other["official-artwork"].front_default;
		q_s('.screen').innerHTML = 
		`<img id="sprite" src="${sprite}"alt="${data.name}">`

		//pokemon names ( english and japanese )
		let engName = capFirstLetter(data[0].name);
		let japName = capFirstLetter(data[1].names[9].name);
		let nameStr = engName + " / " + japName
		q_s('#name').textContent = nameStr
	
		//pokemon type
		let typeStr = 
		engName + " is a " + data[0].types[0].type.name + " type pokemon."
		q_s('#type').textContent = typeStr
	
		//pokemon stats
		let hpVal = data[0].stats[0].base_stat;
		let spAttVal = data[0].stats[1].base_stat;
		let attVal = data[0].stats[2].base_stat;
		let spcDfVal = data[0].stats[3].base_stat;
		let defVal = data[0].stats[4].base_stat;
		let speedVal = data[0].stats[5].base_stat;
		q_s('#hp').textContent = hpVal
		q_s('#spcAtt').textContent = spAttVal
		q_s('#att').textContent = attVal
		q_s('#spcDef').textContent = spcDfVal
		q_s('#def').textContent = defVal
		q_s('#speed').textContent = speedVal
	
		
	
		//get pokemon description
		let description = data[1].flavor_text_entries[2].flavor_text;
		q_s('.poke_desc').textContent = description;
	
		//Evolution chain sprites
		let chainURL = data[1].evolution_chain.url
		let evolvedYayOrNay = data[1].evolves_from_species
		let evolvedFrom = data[1].evolves_from_species.name
		let current = sprite
		
		//testing
		console.log(evolvedYayOrNay)
		
		//calls api for sprite url and adds it to DOM
		getSprite(evolvedFrom, "evoA") 
		
		//calls api for sprite of next evolution and adds it to DOM
		getEvolvesTo(chainURL, "evoC")


		q_s('#evo_container').innerHTML = 
		`<img id="evoA" class="evo_node" src="" alt="">

		<img id="evoB" class="evo_node" src="${current}" alt="">
		
		<img id="evoC" class="evo_node" src="" alt="$">`
	
	
	}).catch(function (error) {
		// if there's an error, log it
		console.log(error);
	});				
	
}

//Capitalize fir letter of a string, used for data formatting
function capFirstLetter(str){
	let resStr = ""

	for(let i = 0; i < str.length; i++){
		if(i == 0){
			resStr += str[i].toUpperCase()
		}else{
			resStr += str[i]
		}
	}

	return resStr;
}

//Get sprite url from API and display in DOM using a given element id
function getSprite(pokemon, imgId){
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  		.then(response => response.json())
  		.then(data => {
			
			if(!data.sprites.other["official-artwork"].front_default){
				q_s(`#${imgId}`).src = ""
			}else{
				q_s(`#${imgId}`).src = 
				data.sprites.other["official-artwork"].front_default
			}
		  }	)
  		.catch(error => console.log('error', error));
}

//Uses getSprite and a evolution chain url to find the evultion of
//searched pokemon, if any
function getEvolvesTo(url, imgId){
	fetch(`${url}`)
  		.then(response => response.json())
  		.then(data => {
			if(!data.chain.evolves_to[0].evolves_to[0].species.name){
				q_s(`#${imgId}`).src = ""
			}else{
				getSprite(data.chain.evolves_to[0].evolves_to[0].species.name , imgId)
			}			
		  }	)
  		.catch(error => console.log('error', error));
}