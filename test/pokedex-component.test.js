const test = QUnit.test;

QUnit.module('allow to paginate through pokedex');

function pageArray(testArray, pagingOptions){
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;

    const startIndex = ((page - 1) * perPage);
    const endIndex = perPage + startIndex;

    return testArray.slice(startIndex, endIndex);
}


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