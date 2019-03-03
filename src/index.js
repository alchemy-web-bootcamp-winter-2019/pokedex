import pokedex from '../data/pokedex.js';
import { loadPokedex } from '../src/template-component.js';
import loadPaging from '../src/paging-component.js';
import pageArray from '../src/pokedex-component.js';
import loadSort from '../src/dropdown-component.js';
import sortFilter from '../src/sort-component.js';

// loadPokedex(pokedex);

loadSort(sortOption => {
    const sortedPokemon = sortFilter(pokedex, sortOption);
    loadPokedex(sortedPokemon);
});

loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = pageArray(pokedex, pagingOptions);
    loadPokedex(pagedPokedex);
});