import pageArray from '../src/page-array.js';

const test = QUnit.test;

QUnit.module('page array test');

const testPageArray = [
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
];

test('page 1 with 4 items per page', assert => {
    const pagingOptions = {
        page: 1,
        perPage: 4
    };
    
    const result = pageArray(testPageArray, pagingOptions);

    const expected = [
        'one',
        'two',
        'three',
        'four'
    ];

    assert.deepEqual(result, expected);
});

test('page 2 with 5 items per page', assert => {
    const pagingOptions = {
        page: 2,
        perPage: 5
    };
    
    const result = pageArray(testPageArray, pagingOptions);

    const expected = [
        'six',
        'seven',
        'eight',
        'nine',
        'ten'
    ];

    assert.deepEqual(result, expected);
});

test('page 3 with 4 items per page', assert => {
    const pagingOptions = {
        page: 3,
        perPage: 4
    };
    
    const result = pageArray(testPageArray, pagingOptions);

    const expected = [
        'nine',
        'ten'
    ];

    assert.deepEqual(result, expected);
});