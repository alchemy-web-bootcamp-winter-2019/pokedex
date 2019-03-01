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

function pageArray(array, pagingOptions) {
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return array.slice(startIndex, endIndex);
}

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

