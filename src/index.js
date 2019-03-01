import loadCards from './load-cards.js';
import pokedex from '../data/pokedex.js';
import loadPaging from './paging-component.js';

loadCards(pokedex);

loadPaging(pokedex.length,, cards => { loadCards(cards)
    );