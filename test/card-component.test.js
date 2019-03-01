
const test = QUnit.test;

QUnit.module('pokeman card creation');

function createCard() {
    const html = /*html*/ `
        <li>
            <p>bulbasaur</p>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p>hp: 45</p>
            <p> attack: 49</p>
            <p>defense: 49</p>
        </li>
    `;
    //I need to get this so that it becomes dom to be inserted
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('createCard function to render cards dynamically', assert => {
    //arrange
    const expected = /*html*/ `
        <li>
            <p>bulbasaur</p>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p>hp: 45</p>
            <p> attack: 49</p>
            <p>defense: 49</p>
        </li>
    `;

    //act
    const result = createCard();
    //assert
    assert.htmlEqual(result, expected);
});