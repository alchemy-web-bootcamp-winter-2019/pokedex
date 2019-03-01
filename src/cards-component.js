export function makePokedexTemplate(pokedex) {
    const html = /*html*/
    `<li style="background-color: ${pokedex.color_1}">
        <h3>${pokedex.pokemon}<div class="type_2" style="background-color: ${pokedex.color_2}"></div></h3>
        <img src="${pokedex.url_image}">
        <p class="stats">
            <span>HP: ${pokedex.hp} | </span>
            <span>A: ${pokedex.attack} | </span>
            <span>D: ${pokedex.defense}</span>
        </p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}