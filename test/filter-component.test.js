

const test = QUnit.test;
QUnit.module('filter by type 1');
const types = ['grass'];

function buildTypeFilter(types) {
    const html = /*html*/`
        <option value="${types}">${types}</option> 
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

// const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock',
//     'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
//     'ice', 'dragon', 'dark', 'fairy'
// ];

test('populate type 1 filter options dynamically', assert => {
    //arrange
    
    const expected = /*html*/`
        <option value="grass">grass</option>
    `;

    //act
    const result = buildTypeFilter(types);
    console.log('result', result);
    console.log('expected', expected);
    //assert
    assert.htmlEqual(result, expected);
});