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


//make for each loop to append each pokedex entry and render them in browser
//include clearing while loop so each page clears the previous array

export function loadPokedex(allPokemon){
    //get el by id to target the html area to append pokemon
    const makePokeList = document.getElementById('poke-list');
    //while loop that finds the dom node children being appended to the html
    //and removes the previous collection of pokemon per page (being references as makePokeList)
    while(makePokeList.children.length > 0){
        makePokeList.lastElementChild.remove();
    }
    //using a foreach method in lieu of a for loop to append the pokeList to the
    //html template makeTemplate as defined above
    allPokemon.forEach(pokemonPerPage => {
        const dom = makeTemplate(pokemonPerPage);
        makePokeList.appendChild(dom);
    });
}
