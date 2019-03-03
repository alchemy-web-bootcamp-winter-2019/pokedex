

const test = QUnit.test;
QUnit.module('filter by type 1');

function buildTypeFilter() {
    const html = /*html*/`
        <option value="grass">grass</option> 
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}


// const type1List = ['grass', 'fire', 'water'];

test('populate type 1 filter options dynamically', assert => {
    //arrange
    
    const expected = /*html*/`
        <option value="grass">grass</option>
    `;

    //act
    const result = buildTypeFilter();
    console.log('result', result);
    console.log('expected', expected);
    //assert
    assert.htmlEqual(result, expected);
});