export default function createListItem (pokemon) {
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