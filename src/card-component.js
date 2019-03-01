
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