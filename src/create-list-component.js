
export function createListItem(pokemon) {
    const template = document.createElement('template');
    const html = /*html*/`
        <li style = "background-color:${pokemon.color_1}" >
        <h2>${pokemon.pokemon}</h2>
        <img src="${pokemon.url_image}">
        <p> HP:${pokemon.hp} D:${pokemon.attack} A:${pokemon.attack} </p>
    </li>
        `;
    template.innerHTML = html;
    return template.content;
}

export default function renderPokemon(pokemonToBeRendered) {
    const pokedexNode = document.getElementById('card-gallery');
    while(pokedexNode.children.length > 0) {
        pokedexNode.removeChild(pokedexNode.lastChild);
    }

    pokemonToBeRendered.forEach(pokemon => {
        const listItem = createListItem(pokemon);
        pokedexNode.appendChild(listItem);
    });

}

