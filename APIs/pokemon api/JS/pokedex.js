let pokeName = document.querySelector('#pokemon_entry').value;

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

	//pokemon name
	let name = capFirstLetter(data[0].name);
	document.querySelector('#name').textContent = name

	//pokemon type
	document.querySelector('#type').textContent = data[0].types[0].type.name

	//pokemon stats
	

	//get pokemon image from responses
	let sprite = data[0].sprites.other["official-artwork"].front_default;
	document.querySelector('.screen').innerHTML = 
	`<img id="sprite" src="${sprite}"alt="${data.name}">`

	//get pokemon description
	let description = data[1].flavor_text_entries[0].flavor_text;
	document.querySelector('.poke_desc').textContent = description;

	//Evo chain images - needs to be fixed
	document.querySelector('#evo_container').innerHTML = 
	`<img class="evo_node" src="${data[0].sprites.other["official-artwork"].front_default}"
	alt="${data[0].name}">
	<img class="evo_node" src="${data[0].sprites.other["official-artwork"].front_default}"
	alt="${data[0].name}">
	<img class="evo_node" src="${data[0].sprites.other["official-artwork"].front_default}"
	alt="${data[0].name}">`


}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});				


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