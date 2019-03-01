// function that creates html template of pokedex
export function makePokedexTemplate(pokedex) {
    const html = /*html*/
    `<li style="background-color: ${pokedex.color_1}">
        <a href="${pokedex.pokedex}" target="_blank">
            <h3>${pokedex.pokemon}<div class="type_2" style="background-color: ${pokedex.color_2}"></div></h3>
            <img src="${pokedex.url_image}">
            <p class="stats">
                <span>HP: ${pokedex.hp}</span>
                <span>A: ${pokedex.attack}</span>
                <span>D: ${pokedex.defense}</span>
            </p>
        </a>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
// function that uses forEach loop to generate the pokedex and calls on makePokedexTemplate function
export default function loadPokedex(pokedex) {
    const pokemonCards = document.getElementById('pokemon-cards');
    // for each card in the pokedex, create the li element using the makePokedexTemplate function
    // append every li to the ul (pokemonCards)
    pokedex.forEach(pokemon => {
        const pokemonCard = makePokedexTemplate(pokemon);
        pokemonCards.appendChild(pokemonCard);
    });
}