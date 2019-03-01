import pokedex from '../data/pokedex.js';
import loadCards from './card-component.js';
import loadPaging from './paging-component.js';

loadPaging(pokedex.length);
loadCards(pokedex);