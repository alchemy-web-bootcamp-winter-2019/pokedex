import pageArray from '../src/page-array.js';
const test = QUnit.test;

QUnit.module('Paging Tests');
const testArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];


test('Page 1 of 3 per page', function(assert) {
   const expected = [9, 8, 7];
   const pageInfo = {
      currentPage: 1,
      perPage: 3
   };
   const result = pageArray(testArray, pageInfo);
   assert.deepEqual(expected, result);
});

test('Page 2 of 4 per page', function(assert) {
   const expected = [5, 4, 3, 2];
   const pageInfo = {
      currentPage: 2,
      perPage: 4
   };
   const result = pageArray(testArray, pageInfo);
   assert.deepEqual(expected, result);
});

test('Page 3 of 4 per page', function(assert) {
   const expected = [1, 0];
   const pageInfo = {
      currentPage: 3,
      perPage: 4
   };
   const result = pageArray(testArray, pageInfo);
   assert.deepEqual(expected, result);
});