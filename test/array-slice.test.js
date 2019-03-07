import arraySlice from '../src/array-slice.js';

const test = QUnit.test;

QUnit.module('Slice array');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

test('slice given page 1 and 3 per page', assert => {
    // arrange
    const pagingOptions = {
        currentPage: 1,
        perPage: 3
    };
    const expected = [1, 2, 3];
    // act
    const result = arraySlice(array, pagingOptions);
    // assert
    assert.deepEqual(result, expected);
});

test('slice given page 3 and 2 per page', assert => {
    // arrange
    const pagingOptions = {
        currentPage: 3,
        perPage: 2
    };
    const expected = [5, 6];
    // act
    const result = arraySlice(array, pagingOptions);
    // assert
    assert.deepEqual(result, expected);
});

test('slice given page 3 and 4 per page', assert => {
    // arrange
    const pagingOptions = {
        currentPage: 3,
        perPage: 4
    };
    const expected = [9, 10, 11];
    // act
    const result = arraySlice(array, pagingOptions);
    // assert
    assert.deepEqual(result, expected);
});