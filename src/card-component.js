
const cardBin = document.getElementById('card-bin');

export function createCard(pokemon) {
    const html = /*html*/ `
        <li>
            <p>${pokemon.pokemon}</p>
            <img src="${pokemon.url_image}">
            <p>hp: ${pokemon.hp}</p>
            <p> attack: ${pokemon.attack}</p>
            <p>defense: ${pokemon.defense}</p>
        </li>
    `;
    //I need this so that it becomes dom to be inserted
    return createCardDom();

    function createCardDom() {
        const template = document.createElement('template');
        template.innerHTML = html;
        const dom = template.content;
        return dom;
    }
}

export default function loadCards(pokedex) {
    console.log('in loadCArds');
    pokedex.forEach(pokemon => {
        const dom = createCard(pokemon);
        cardBin.appendChild(dom);
    });
}