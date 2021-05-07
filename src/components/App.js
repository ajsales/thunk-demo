import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { newPokemon, switchPokemon } from '../redux/actionCreators';

export default function App() {

	const currPokemon = useSelector(state => state.currPokemon);
	const box = useSelector(state => state.box);
	const dispatch = useDispatch();

	const handleSwitch = (index) => {
		dispatch(switchPokemon(index));
	}

	const handleNewPokemon = () => {
		const randomIndex = getRandomInt(898) + 1;
		dispatch(newPokemon(randomIndex));
	}

	const boxPokemon = box.map((pokemon, index) => {
		return (
			<button onClick={() => handleSwitch(index)} key={index}>
				<img src={pokemon.sprite} alt={pokemon.name} />
			</button>
		);
	});

	return (
		<div>
			<img src={currPokemon.sprite} alt={currPokemon.name} />
			<button onClick={handleNewPokemon}>
				Add Pokemon
			</button>
			<div>{boxPokemon}</div>
		</div>
	);
}


function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
