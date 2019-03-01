import { makePokedexTemplate } from '../src/cards-component.js';

const test = QUnit.test;

QUnit.module('make pokedex template');

const pokedex = {
    'pokemon': 'Bulbasaur',
    'color_1': '#78C850',
    'color_2': '#A040A0',
    'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    'hp': 45,
    'attack': 49,
    'defense': 49,
    'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur'
};

test('make pokedex template', assert => {
    const result = makePokedexTemplate(pokedex);
    const expected = /*html*/
    `<li style="background-color: #78C850">
        <a href="http://www.pokemon.com/us/pokedex/bulbasaur" target="_blank">
            <h3>Bulbasaur<div class="type_2" style="background-color: #A040A0"></div></h3>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p class="stats">
                <span>HP: 45</span>
                <span>A: 49</span>
                <span>D: 49</span>
            </p>
        </a>
    </li>`;

    assert.htmlEqual(result, expected);
});