export function makeCardTemplate(pokemon) {
   const html = `
      <li>
         <h2>${pokemon.pokemon}</h2>
            <img src="${pokemon.url_image}">
            <p>
            <span class="type1">${pokemon.type_1}</span>
            ${ pokemon.type_2 === 'NA' ? '' : `<span class="type2">${pokemon.type_2}</span>` }
            </p>
        </li>
    `;
   const template = document.createElement('template');
   template.innerHTML = html; 
   return template.content;
}

const pokeDisplay = document.getElementById('poke-display');
export default function loadDisplay(pokemonList) {
   clearDisplay();
   pokemonList.forEach(pokemon => {
      pokeDisplay.appendChild(makeCardTemplate(pokemon));
      
   });
}

function clearDisplay() {
   while(pokeDisplay.firstChild) {
      pokeDisplay.firstChild.remove();
   }
}
