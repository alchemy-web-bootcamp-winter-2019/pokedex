import makePokeTemplate from './make-poke-template.js';

const pokemonGallery = document.getElementById('pokemon-gallery');

export default function loadPoke(pokemon) {
    
    pokemon.forEach(pokemon => {
        const dom = makePokeTemplate(pokemon);
        pokemonGallery.appendChild(dom);
    });
   
   
}