const test = QUnit.test;
QUnit.module('construct filter based on selected type');


function filterPokedex(testArray, chosenType) {
    return testArray.filter(item => {
        const hasType = !chosenType.type_1 || chosenType.type_1 === item.type_1;
        console.log('hasType', hasType);
        return hasType;
    });
}


test('filtered based on poison', assert => {
    //arrange    
    const testArray = [
        { type_1: 'poison', id: 1 },
        { type_1: 'grass', id: 4 },
        { type_1: 'fire', id: 3 } 
    ];

    const chosenType = { type_1: 'poison' };

    const expected = [
        { type_1: 'poison', id: 1 }
    ];
    //act
    const result = filterPokedex(testArray, chosenType);

    //assert
    assert.deepEqual(result, expected);
});
test('filtered based on no choice made', assert => {
    //arrange    
    const testArray = [
        { type_1: 'poison', id: 1 },
        { type_1: 'grass', id: 4 },
        { type_1: 'fire', id: 3 } 
    ];

    const chosenType = { type_1: '' };

    const expected = [
        { type_1: 'poison', id: 1 },
        { type_1: 'grass', id: 4 },
        { type_1: 'fire', id: 3 } 
    ];
    //act
    const result = filterPokedex(testArray, chosenType);

    //assert
    assert.deepEqual(result, expected);
});