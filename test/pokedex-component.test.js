import pageArray from '../src/pokedex-component.js';
const test = QUnit.test;

QUnit.module('allow to paginate through pokedex');

const testArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven'
];

test('page 1 of 4 perPage', assert => {
    //arrange
    const pagingOptions = {
        page: 1,
        perPage: 4
    };

    //act
    const result = pageArray(testArray, pagingOptions);
    const expected = ['one', 'two', 'three', 'four'];
    //assert
    assert.deepEqual(result, expected);
});

test('page 2 of 4 perPage', assert => {
    //arrange
    const pagingOptions = {
        page: 2,
        perPage: 4
    };

    //act
    const result = pageArray(testArray, pagingOptions);
    const expected = ['five', 'six', 'seven', 'eight'];
    //assert
    assert.deepEqual(result, expected);
});

test('page 3 of 4 perPage', assert => {
    //arrange
    const pagingOptions = {
        page: 3,
        perPage: 4
    };

    //act
    const result = pageArray(testArray, pagingOptions);
    const expected = ['nine', 'ten', 'eleven'];
    //assert
    assert.deepEqual(result, expected);
});