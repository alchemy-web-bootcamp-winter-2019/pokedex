const test = QUnit.test;

function makePokemonCard(card) {
    const html = /*html*/
        `<li id="pokedex-card">
        <h3>bulbasaur<div class="type_2"></div></h3>
        <a href="http://www.pokemon.com/us/pokedex/bulbasaur"><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"></a>
        <p>HP: 45 A: 49 D: 49</p>
        </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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
        `<li id="pokedex-card">
        <h3>bulbasaur<div class="type_2"></div></h3>
        <a href="http://www.pokemon.com/us/pokedex/bulbasaur"><img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"></a>
        <p>HP: 45 A: 49 D: 49</p>
        </li>`;
    //act
    const dom = makePokemonCard(card);
    //assert
    assert.htmlEqual(dom, expected);
});