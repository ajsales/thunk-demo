import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { newPokemon, switchPokemon, addPokemon } from '../redux/actionCreators';

export default function App() {

	const currPokemon = useSelector(state => state.currPokemon);
	const box = useSelector(state => state.box);
	const wildPokemon = useSelector(state => state.wildPokemon);
	const dispatch = useDispatch();

	const handleSwitch = (index) => {
		dispatch(switchPokemon(index));
	}

	const handleAddPokemon = () => {
		if (wildPokemon.length > 0) {
			dispatch(addPokemon());
		}
	}

	useEffect(() => {
		if (wildPokemon.length < 10) {
			const randomIndex = getRandomInt(898) + 1;
			console.log('Adding pokemon:', randomIndex);
			dispatch(newPokemon(randomIndex));
		}
	}, [dispatch, wildPokemon])

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
			
			<button onClick={handleAddPokemon}>
				Add Pokemon
			</button>

			<div>{boxPokemon}</div>
		</div>
	);
}


function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
