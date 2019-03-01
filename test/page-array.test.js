const test = QUnit.test;
const testArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
];

function pageArray(array, pagingOptions) {
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return array.slice(startIndex, endIndex);
}

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