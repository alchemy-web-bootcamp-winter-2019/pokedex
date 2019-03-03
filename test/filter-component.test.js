

const test = QUnit.test;
QUnit.module('filter by type 1');

function buildTypeFilter() {
    // const html = /*html*/`
    //     <option value="">Filter by Type 1</option>
    //     <option value="grass">grass</option>
    //     <option value="fire">fire</option>
    //     <option value="water">water</option> 
    // `;

    // const template = document.createElement('template');
    // template.innerHTML = html;
    // const dom = template.content;
    // return dom;
}



test('populate type 1 filter options dynamically', assert => {
    //arrange
    const type1List = ['grass', 'fire', 'water'];
    
    const expected = /*html*/`
        <option value="">Filter by Type 1</option>
        <option value="grass">grass</option>
        <option value="fire">fire</option>
        <option value="water">water</option> 
    `;

    //act
    const result = buildTypeFilter(type1List);
    //assert
    assert.htmlEqual(result, expected)
});