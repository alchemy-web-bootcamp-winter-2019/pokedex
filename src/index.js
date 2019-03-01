import cards from '../data/pokedex.js';
import loadCards from './card-component.js';
import loadPaging from './paging-component.js';

loadCards(cards);

loadPaging(cards.length, pagingOptions => {
    console.log(pagingOptions);
});