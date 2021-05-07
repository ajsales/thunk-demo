export const fetchPokemon = (index) => {
	return fetch('https://pokeapi.co/api/v2/pokemon/' + index);
};

export const newPokemonSync = (pokemon) => {
	return {
		type: 'pokemon/new',
		pokemon
	};
};

export const newPokemon = (index) => {
	return async function(dispatch) {
		const response = await fetchPokemon(index);
		const pokemonData = await response.json();

		const pokemon = {
			name: pokemonData.name,
			sprite: pokemonData.sprites.front_default
		};
		dispatch(newPokemonSync(pokemon));
	};
}

export const switchPokemon = (index) => {
	return {
		type: 'pokemon/switch',
		index
	};
};