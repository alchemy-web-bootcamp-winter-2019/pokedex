import pokedex from '../data/pokedex.js';
import loadPokedex from '../src/cards-component.js';
import loadPaging from '../src/paging-component.js';
import pageArray from '../src/page-array.js';
import userNameDisplay from '../src/userNameDisplay.js';

const json = window.localStorage.getItem('user');
if(!json) {
    window.location = '/';
}
const user = JSON.parse(json);

userNameDisplay(user);

loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = pageArray(pokedex, pagingOptions);
    
    loadPokedex(pagedPokedex);
});