import loadCards from './load-cards.js';
import pokedex from '../data/pokedex.js';
import loadPaging from './paging-component.js';
import getPage from './paging.js';

// loadCards(pokedex);

loadPaging(pokedex.length, (pageNumber, pageSize) => {
    const pagedPokedex = getPage(pokedex, pageNumber, pageSize);
    loadCards(pagedPokedex);
});