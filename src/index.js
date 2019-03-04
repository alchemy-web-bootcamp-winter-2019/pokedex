import loadCards from './load-cards.js';
import pokedex from '../data/pokedex.js';
import loadPaging from './paging-component.js';
import getPage from './paging.js';
import sortData from './sorting.js';
import loadSort from './sort-component.js';

let sortedPokedex = null;

loadSort(sortKey => {
    sortedPokedex = sortData(pokedex, sortKey);
    console.log(sortedPokedex, sortKey);
    loadPaging(pokedex.length, (pageNumber, pageSize) => {
        const pagedPokedex = getPage(sortedPokedex, pageNumber, pageSize);
        loadCards(pagedPokedex);
    });
});

