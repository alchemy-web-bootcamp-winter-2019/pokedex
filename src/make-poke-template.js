export default function makePokeTemplate(pokemon) {
    let htmlTemplate = /*html*/ `
    <li style=" border: 5px solid ${pokemon.color_1};">
        <h2><a href="${pokemon.pokedex}">${pokemon.pokemon}</a> <span class="type_2" style=" background-color: ${pokemon.color_2};"></span></h2>
        <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
        <div>
        HP: <span id="hp">${pokemon.hp}</span>
        Attack: <span id="attack">${pokemon.attack}</span>
        Defense: <span id="defense">${pokemon.defense}</span>
        </div>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = htmlTemplate;

    return template.content;

}
