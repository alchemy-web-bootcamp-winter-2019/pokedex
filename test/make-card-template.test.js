const test = QUnit.test;
import { makePokemonCard } from '../src/card-component.js';

test('make card template', assert => {
    //arrange
    const card = {
        'pokemon': 'bulbasaur',
        'attack': 49,
        'defense': 49,
        'hp': 45,
        'color_1': '#78C850',
        'color_2': '#A040A0',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur'
    };

    const expected = /*html*/
        `<li style="background-color: #78C850">
        <h3>bulbasaur<div class="type_2" style="background-color: #A040A0"></div></h3>
        <a href="http://www.pokemon.com/us/pokedex/bulbasaur"><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"></a>
        <p>HP: 45 A: 49 D: 49</p>
        </li>`;
    //act
    const dom = makePokemonCard(card);
    //assert
    assert.htmlEqual(dom, expected);
});