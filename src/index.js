import loadDisplay from './display-component.js';
import pokemonList from '../data/pokedex.js';
import { changePage } from './paging-component.js';
import pageArray from './page-array.js';
import loadSort from './sort-component.js';
import sortByChoice from './sort-by-choice.js';

loadDisplay(pokemonList);
changePage(pokemonList.length, (pageInfo) => {
   const paged = pageArray(pokemonList, pageInfo);
   loadDisplay(paged); 
});

loadSort(sortOption => {
   const sorted = sortByChoice(pokemonList, sortOption);
   changePage(sorted.length, (pageInfo) => {
      const paged = pageArray(pokemonList, pageInfo);
      loadDisplay(paged); 
   });
   
});

