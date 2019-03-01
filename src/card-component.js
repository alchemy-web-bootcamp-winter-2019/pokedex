const pokedexList = document.getElementById('pokedex-list');

export default function loadCards(pokedex) {
    clearCards();
    pokedex.forEach(pokemon => {
        const dom = createCard(pokemon);
        pokedexList.appendChild(dom);
    });
}

function clearCards() {
    while(pokedexList.children.length > 0) {
        pokedexList.lastElementChild.remove();
    }
}

export function createCard(pokemon) {
    const html = /*html*/`
        <li style="background-color: ${pokemon.color_1}">
            <h2>${pokemon.pokemon}</h2>
            <a href=${pokemon.pokedex}>
                <img src=${pokemon.url_image} alt="image of ${pokemon.pokemon}">
            </a>
            <p>
                HP: ${pokemon.hp} A: ${pokemon.attack} D: ${pokemon.defense}
            </p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}