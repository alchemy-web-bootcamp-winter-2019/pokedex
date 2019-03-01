import pokedex from '../data/pokedex.js';
import loadPokedex from '../src/cards-component.js';
import loadPaging from '../src/paging-component.js';
import pageArray from '../src/page-array.js';

loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = pageArray(pokedex, pagingOptions);
    
    loadPokedex(pagedPokedex);
});