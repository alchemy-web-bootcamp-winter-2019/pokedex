import './html-equal.js';

const test = QUnit.test;

const pokemon = {
    'pokemon': 'bulbasaur',
    'type_1': 'grass',
    'type_2': 'poison',
    'attack': 49,
    'defense': 49,
    'hp': 45,
    'color_1': '#78C850',
    'color_2': '#A040A0',
    'color_f': '#81A763',
    'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
};

function makePokeTemplate(pokemon) {
    let htmlTemplate = `
    <li style=" border: 5px solid ${pokemon.color_1};">
        <h2>${pokemon.pokemon} <span class="type_2" style=" background-color: ${pokemon.color_2};"></span></h2>
        <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
        <div>
        HP: <span id="hp">${pokemon.hp}</span>
        Attack: <span id="attack">${pokemon.attack}</span>
        Defense: <span id="defense">${pokemon.defense}</span>
        </div>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = htmlTemplate;

    return template.content;

}

test('function produces pokemon template', assert => {
    //arrange
    const html = `
    <li style=" border: 5px solid #78C850;">
        <h2>bulbasaur <span class="type_2" style=" background-color: #A040A0;"></span></h2>
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="bulbasaur">
        <div>
        HP: <span id="hp">45</span>
        Attack: <span id="attack">49</span>
        Defense: <span id="defense">49</span>
        </div>
    </li>`;

    //act
    const result = makePokeTemplate(pokemon);

    //assert
    assert.htmlEqual(result, html);


});

