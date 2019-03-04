import filterPokedex from '../src/filter-pokedex.js';

const test = QUnit.test;
QUnit.module('construct filter based on selected type');

test('filtered based on poison', assert => {
    //arrange    
    const testArray = [
        { type_1: 'poison', id: 1 },
        { type_1: 'grass', id: 4 },
        { type_1: 'fire', id: 3 } 
    ];

    const chosenType = { type_1: 'poison' };

    const expected = [
        { type_1: 'poison', id: 1 }
    ];
    //act
    const result = filterPokedex(testArray, chosenType);

    //assert
    assert.deepEqual(result, expected);
});
test('filtered based on no choice made', assert => {
    //arrange    
    const testArray = [
        { type_1: 'poison', id: 1 },
        { type_1: 'grass', id: 4 },
        { type_1: 'fire', id: 3 } 
    ];

    const chosenType = { type_1: '' };

    const expected = [
        { type_1: 'poison', id: 1 },
        { type_1: 'grass', id: 4 },
        { type_1: 'fire', id: 3 } 
    ];
    //act
    const result = filterPokedex(testArray, chosenType);

    //assert
    assert.deepEqual(result, expected);
});