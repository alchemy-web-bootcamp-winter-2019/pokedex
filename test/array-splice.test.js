const test = QUnit.test;

QUnit.module('Splice array');

function arraySplice(array, pagingOptions) {
    const currentPage = pagingOptions.currentPage;
    const perPage = pagingOptions.perPage;

    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    console.log('start', start, 'end', end);

    return array.slice(start, end);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

test('splice given page 1 and 3 per page', assert => {
    // arrange
    const pagingOptions = {
        currentPage: 1,
        perPage: 3
    };
    const expected = [1, 2, 3];
    // act
    const result = arraySplice(array, pagingOptions);
    // assert
    assert.deepEqual(result, expected);
});

test('splice given page 3 and 2 per page', assert => {
    // arrange
    const pagingOptions = {
        currentPage: 3,
        perPage: 2
    };
    const expected = [5, 6];
    // act
    const result = arraySplice(array, pagingOptions);
    // assert
    assert.deepEqual(result, expected);
});

test('splice given page 3 and 4 per page', assert => {
    // arrange
    const pagingOptions = {
        currentPage: 3,
        perPage: 4
    };
    const expected = [9, 10, 11];
    // act
    const result = arraySplice(array, pagingOptions);
    // assert
    assert.deepEqual(result, expected);
});