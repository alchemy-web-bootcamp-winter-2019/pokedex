const test = QUnit.test;

import { createListItem } from '../src/create-list-component.js';

test('test templat making machine', assert => {
    //assign
    const pokedex =  {
        'pokemon': 'bulbasaur',
        'id': 1,
        'species_id': 1,
        'height': 7,
        'weight': 69,
        'base_experience': 64,
        'type_1': 'grass',
        'type_2': 'poison',
        'attack': 49,
        'defense': 49,
        'hp': 45,
        'special_attack': 65,
        'special_defense': 65,
        'speed': 45,
        'ability_1': 'overgrow',
        'ability_2': 'NA',
        'ability_hidden': 'chlorophyll',
        'color_1': '#78C850',
        'color_2': '#A040A0',
        'color_f': '#81A763',
        'egg_group_1': 'monster',
        'egg_group_2': 'plant',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id': 1,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 1,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'bulbasaur',
        'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur'

    };


    const expected = /*html*/`
        <li style="background-color:#78C850">
            <h2>bulbasaur</h2>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p> HP:45 D:49 A:49 </p>
        </li>
    `;
    //act
    const actual = createListItem(pokedex);
    //assert
    assert.htmlEqual(actual, expected);
});