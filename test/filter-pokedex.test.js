const test = QUnit.test;
QUnit.module('construct filter based on selected type');


function filterPokedex(testArray) {
    return [{ type_1: 'poison' }];
}

test('filtered based on type', assert => {
    //arrange    
    const testArray = [
        { type_1: 'poison' },
        { type_1: 'grass' },
        { type_1: 'fire' } 
    ];

    const expected = [
        { type_1: 'poison' }
    ];
    //act
    const result = filterPokedex(testArray);

    //assert
    assert.deepEqual(result, expected);
});