import data from '../data/pokedex.js';
import loadPoke from './load-poke.js';
import loadPaging from './paging-component.js';
import pageArray from './page-array.js';
import loadFilter from './load-filter.js';
import filterPokemon from './filter-pokemon.js';

loadPoke(data);

loadPaging(data.length, pagingOptions => {
    const pagedData = pageArray(data, pagingOptions);
    loadPoke(pagedData);
});

loadFilter(filter => {
    const filtered = filterPokemon(data, filter);
    loadPoke(filtered);

    loadPaging(filtered.length, pagingOptions => {
        const pagedData = pageArray(filtered, pagingOptions);
        loadPoke(pagedData);
    });
});


