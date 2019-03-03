import pokedex from '../data/pokedex.js';
import { loadPokedex } from '../src/template-component.js';
import loadPaging from '../src/paging-component.js';
import pageArray from '../src/pokedex-component.js';

loadPokedex(pokedex);

loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = pageArray(pokedex, pagingOptions);
    loadPokedex(pagedPokedex);
});