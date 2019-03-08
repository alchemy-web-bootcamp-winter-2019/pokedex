import pokedex from '../data/pokedex.js';
import loadPaging from './paging-component.js';
import paginatePokemon from './paginate.js';
import renderPokemon from './create-list-component.js';

const numberOfPokemon = pokedex.length;

loadPaging((params, node, pokesPerPage)=>{
    const paginatedPokes = paginatePokemon(pokedex, params);
    renderPokemon(paginatedPokes);
    const currentPage = Math.ceil(numberOfPokemon / pokesPerPage);
    node.innerHTML = currentPage;
});



