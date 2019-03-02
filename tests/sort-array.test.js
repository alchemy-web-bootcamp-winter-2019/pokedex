import sortByChoice from '../src/sort-by-choice.js';
const test = QUnit.test;

QUnit.module('Testing the Sort function');



const testArray = [
   { pokemon: 'bulbasaur', attack: 49 },
   { pokemon: 'venasaur', attack: 69 },
   { pokemon: 'ivysaur', attack: 12 }
];

test('Sorts list of objects by pokemon name', function(assert) {
   const expected = [
      { pokemon: 'bulbasaur', attack: 49 },
      { pokemon: 'ivysaur', attack: 12 },
      { pokemon: 'venasaur', attack: 69 }
   ];
   const sortOption = { sortField: 'pokemon' };
   const result = sortByChoice(testArray, sortOption);
   
   assert.deepEqual(result, expected);
});

test('Sorts list of objects by attack value', function(assert) {
   const expected = [
      { pokemon: 'ivysaur', attack: 12 },
      { pokemon: 'bulbasaur', attack: 49 },
      { pokemon: 'venasaur', attack: 69 }
   ];
   const sortOption = { sortField: 'attack' };
   const result = sortByChoice(testArray, sortOption);
   
   assert.deepEqual(result, expected);
});