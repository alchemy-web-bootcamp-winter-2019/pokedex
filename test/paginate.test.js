const test = QUnit.test;

import paginatePokemon from '../src/paginate.js';


test('test 4 pokemon per page, on page 2 ', assert =>{

    //assign
    const pokedex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const sortChoices = {
        numberOfPokemon : 4,
        currentPage : 2
    };
    const expected = [5, 6, 7, 8];
    //act
    const actual = paginatePokemon(pokedex, sortChoices);  
    //assert
    assert.deepEqual(actual, expected);
});

test('test 4 pokemon per page, on page 3 ', assert =>{

    //assign
    const pokedex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const sortChoices = {
        numberOfPokemon : 4,
        currentPage : 3
    };
    const expected = [9, 10, 11];
    //act
    const actual = paginatePokemon(pokedex, sortChoices);  
    //assert
    assert.deepEqual(actual, expected);
});

test('test 4 pokemon per page, on page 1 ', assert =>{

    //assign
    const pokedex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const sortChoices = {
        numberOfPokemon : 4,
        currentPage : 1
    };
    const expected = [1, 2, 3, 4];
    //act
    const actual = paginatePokemon(pokedex, sortChoices);  
    //assert
    assert.deepEqual(actual, expected);
});

