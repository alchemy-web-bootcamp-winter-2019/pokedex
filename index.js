import pokedex from './data/pokedex.js';
import loadPaging from '../src/paging-component.js';
import paginatePokemon from '../src/paginate.js';
import renderPokemon from '../src/create-list-component.js';


const numberOfPokemon = pokedex.length;


//render pokemon


loadPaging((params, node, pokesPerPage)=>{
    const paginatedPokes = paginatePokemon(pokedex, params);
    renderPokemon(paginatedPokes);
    const currentPage = numberOfPokemon / pokesPerPage;

    node.innerHTML = currentPage;

   

});



