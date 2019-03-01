import createListComponent from './src/create-list-component.js';
import pokedex from './data/pokedex.js';

const pokedexNode = document.getElementById('card-gallery');

pokedex.forEach(pokemon=>{
    const listItem = createListComponent(pokemon);
    pokedexNode.appendChild(listItem);
});