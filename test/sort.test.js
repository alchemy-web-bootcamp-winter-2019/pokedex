import sortData from '../src/sorting.js';

const test = QUnit.test;

const testData = [
    {
        pokemon: 'bulbasaur',
        type_1: 'grass',
        hp: 45
    },
    {
        pokemon: 'squirtle',
        type_1: 'water',
        hp: 44
    },
    {
        pokemon: 'charmander',
        type_1: 'fire',
        hp: 39
    },
];



test('sort by Pokemon', assert => {
    const sortKey = 'pokemon';
    const expected = [
        {
            pokemon: 'bulbasaur',
            type_1: 'grass',
            hp: 45
        },
        {
            pokemon: 'charmander',
            type_1: 'fire',
            hp: 39
        },
        {
            pokemon: 'squirtle',
            type_1: 'water',
            hp: 44
        },
    ];
    const sorted = sortData(testData, sortKey); 
    assert.deepEqual(sorted, expected);
});