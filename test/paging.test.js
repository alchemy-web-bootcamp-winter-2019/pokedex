import getPage from '../src/paging.js';

const test = QUnit.test;

const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



test('Get second page, with 4 items', assert => {
    const expected = [5, 6, 7, 8];
    const result = getPage(testData, 2, 4);
    assert.deepEqual(result, expected);
});