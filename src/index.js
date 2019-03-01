import data from '../data/pokedex.js';
import loadPoke from './load-poke.js';
import loadPaging from './paging-component.js';
import pageArray from './page-array.js';

loadPoke(data);

loadPaging(data.length, pagingOptions => {
    const pagedData = pageArray(data, pagingOptions);
    loadPoke(pagedData);
});