import data from '../data/pokedex.js';
import loadPoke from './load-poke.js';
import loadPaging from './paging-component.js';
import pageArray from './page-array.js';
import loadFilter from './load-filter.js';
import filterPokemon from './filter-pokemon.js';

loadPoke(data);

loadFilter(filter => {
    const filtered = filterPokemon(data, filter);
    loadPoke(filtered);
});

loadPaging(data.length, pagingOptions => {
    const pagedData = pageArray(data, pagingOptions);
    loadPoke(pagedData);
});

