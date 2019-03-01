
const test = QUnit.test;

QUnit.module('pokeman card creation');

test('delete me and write a test file', assert => {
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
    const result = /*html*/ `
        <li>
            <p>bulbasaur</p>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p>hp: 45</p>
            <p> attack: 49</p>
            <p>defense: 49</p>
        </li>
    `;
    //assert
    assert.equal(result, expected);
});