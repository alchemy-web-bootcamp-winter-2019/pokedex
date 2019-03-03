export default function makeTemplate(pokeList){
    const html = /*html*/ `<li class="${pokeList.type_1}" style="background-color:${pokeList.color_1}">
        <h2>${pokeList.pokemon}</h2>
        <img src="${pokeList.url_image}">
        <p>HP:${pokeList.hp} A:${pokeList.attack} D:${pokeList.defense}</p>
        <p>Weight:${pokeList.weight}</p>
        </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}

const makePokeList = document.getElementById('poke-list');

//make for each loop to append each pokedex entry and render them in browser

export function loadPokedex(allPokemon){
    allPokemon.forEach(singlePokemon => {
        const dom = makeTemplate(singlePokemon);
        makePokeList.appendChild(dom);
    });
}