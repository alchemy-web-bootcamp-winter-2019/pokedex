import pokedex from '../data/pokedex.js';
import types from '../src/filter-component.js';
import loadCards from '../src/card-component.js';
import buildTypeFilter from '../src/filter-component.js';

loadCards(pokedex);
buildTypeFilter(types);