export function makePokemonCard(card) {
    const html = /*html*/
        `<li style="background-color: ${card.color_1}">
        <h3>${card.pokemon}<div class="type_2" style="background-color: ${card.color_2}"></div></h3>
        <a href="${card.pokedex}"><img src="${card.url_image}"></a>
        <p>HP: ${card.hp} A: ${card.attack} D: ${card.defense}</p>
        </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}