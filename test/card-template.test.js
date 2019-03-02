import './html-equal.js';
import pokedex from '../data/pokedex.js';
import { makeCardTemplate }  from '../src/load-cards.js';

const test = QUnit.test;

test('template produces correct html', assert => {
    const card = pokedex[0];

    const html = `<li style="background-color: #78C850">
    <h2>bulbasaur</h2>
    <div class="secondary" style="background-color: #A040A0"></div>
    <div class="image-container">
        <a href="http://www.pokemon.com/us/pokedex/bulbasaur">
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="bulbasaur">
        </a>
    </div>
    <p>
        HP: 45 A: 49 D: 49
    </p>
    </li>`;
    const result = makeCardTemplate(card);
    assert.htmlEqual(result, html);
});