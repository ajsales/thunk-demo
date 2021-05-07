import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	currPokemon: {
		name: 'pikachu',
		sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
	},
	box: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'pokemon/new':
			return {
				...state,
				box: [...state.box, action.pokemon]
			};

		case 'pokemon/switch':
			return {
				...state,
				currPokemon: state.box[action.index],
				box: [
					...state.box.slice(0, action.index),
					state.currPokemon,
					...state.box.slice(action.index + 1)
				]
			};

		default:
			return state
	}
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;