import pageArray from '../src/page-array.js';

const test = QUnit.test;

const testArray = [
    'apple',
    'banana',
    'cherry',
    'donut',
    'eggplant',
    'fig',
    'grape',
    'hahaha',
    'i dunno',
    'jokes'
];

test('page 1 of 4 per page', assert => {
    //arrange
    const pagingOptions = {
        page: 1,
        perPage: 4
    };
    //act
    const paged = pageArray(testArray, pagingOptions);
    //assert
    assert.deepEqual(paged, [   
        'apple',
        'banana',
        'cherry',
        'donut']);
});

test('page 3 of 3 per page', assert => {
    //arrange
    const pagingOptions = {
        page: 3,
        perPage: 3
    };
    //act
    const paged = pageArray(testArray, pagingOptions);
    //assert
    assert.deepEqual(paged, [
        'grape',
        'hahaha',
        'i dunno'
    ]);
});

