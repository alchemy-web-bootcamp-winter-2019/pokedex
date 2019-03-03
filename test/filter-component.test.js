import { getTypeOptions } from '../src/filter-component.js';

const test = QUnit.test;
QUnit.module('filter by type 1');


const types = ['grass'];

test('populate type filter options dynamically', assert => {
    //arrange
    
    const expected = /*html*/`
        <option name="type" value="grass">grass</option>
    `;

    //act
    const result = getTypeOptions(types);

    //assert
    assert.htmlEqual(result, expected);
});