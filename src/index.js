import loadDisplay from './display-component.js';
import pokemonList from '../data/pokedex.js';
import { changePage } from './paging-component.js';

loadDisplay(pokemonList);
changePage(pokemonList.length, (pageInfo) => {
   console.log(pageInfo); 
});