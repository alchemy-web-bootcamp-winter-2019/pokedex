const test = QUnit.test;
import pageArray from '../src/page-array.js';
const testArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
];

test('page 1 of 3 per page', assert => {
    //arrange
    const pagingOptions = {
        page: 1,
        perPage: 3
    };

    //act
    const paged = pageArray(testArray, pagingOptions);

    //assert
    assert.deepEqual(paged, ['one', 'two', 'three']);
});

test('page 2 of 5 per page', assert => {
    //arrange
    const pagingOptions = {
        page: 2,
        perPage: 5
    };

    //act
    const paged = pageArray(testArray, pagingOptions);

    //assert
    assert.deepEqual(paged, ['six', 'seven']);
});