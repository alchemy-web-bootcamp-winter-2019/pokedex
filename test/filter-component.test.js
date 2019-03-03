import { buildTypeFilter } from '../src/filter-component.js';

const test = QUnit.test;
QUnit.module('filter by type 1');


const types = ['grass'];

test('populate type filter options dynamically', assert => {
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