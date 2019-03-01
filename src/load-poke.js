import makePokeTemplate from './make-poke-template.js';

const pokemonGallery = document.getElementById('pokemon-gallery');

export default function loadPoke(pokemon) {

    // while(pokemonGallery.children.length > 0){
    //     pokemonGallery.lastElementChild.remove();
    // }

    pokemon.forEach(pokemon => {
        const dom = makePokeTemplate(pokemon);
        pokemonGallery.appendChild(dom);
    });
   
   
}