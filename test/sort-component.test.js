import sortFilter from '../src/sort-component.js';
const test = QUnit.test;

QUnit.module('creating sorting function');

const testPokemon = [{
    pokemon: 'bulbasaur',
    weight: 56
}, {
    pokemon: 'scyther',
    weight: 300
}, {
    pokemon: 'jigglypuff',
    weight: 32
}
];

test('sort by pokemon', assert => {
//arrange
    const sortOptions = {
        property: 'pokemon'
    };
//act
    const result = sortFilter(testPokemon, sortOptions);
    const expected = [{
        pokemon: 'bulbasaur',
        weight: 56
    }, {
        pokemon: 'jigglypuff',
        weight: 32
    }, {
        pokemon: 'scyther',
        weight: 300
    }
    ];

//assert
    assert.deepEqual(result, expected);
});


test('sort by weight', assert => {
//arrange
    const sortOptions = {
        property: 'weight'
    };
    
//act
    const result = sortFilter(testPokemon, sortOptions);
    const expected = [{
        pokemon: 'jigglypuff',
        weight: 32
    }, {
        pokemon: 'bulbasaur',
        weight: 56
    }, {
        pokemon: 'scyther',
        weight: 300
    }
    ];

//assert
    assert.deepEqual(result, expected);
});