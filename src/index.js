import pokedex from '../data/pokedex.js';
import { types } from '../src/filter-component.js';
import loadCards from '../src/card-component.js';
import buildByTypeFilter from '../src/filter-component.js';
import filterPokedex from '../src/filter-pokedex.js';

loadCards(pokedex);
buildByTypeFilter(types, chosenTypes => {
    const filteredPokedex = filterPokedex(pokedex, chosenTypes);
    loadCards(filteredPokedex);
});

//I have a callback of chosenTypes hanging around from buildTypeFilter's event listener