import pokedex from '../data/pokedex.js';
import loadCards from './card-component.js';
import loadPaging from './paging-component.js';
import arraySlice from './array-slice.js';

loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = arraySlice(pokedex, pagingOptions);
    loadCards(pagedPokedex);
});