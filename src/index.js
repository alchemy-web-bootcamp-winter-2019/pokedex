import data from '../data/pokedex.js';
import makePokeTemplate from './make-poke-template.js';

const pokemonGallery = document.getElementById('pokemon-gallery');

function loadPoke(pokemon) {
    
    pokemon.forEach(pokemon => {
        const dom = makePokeTemplate(pokemon);
        pokemonGallery.appendChild(dom);
    });
   
   
}

loadPoke(data);