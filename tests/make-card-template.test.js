const test = QUnit.test;
QUnit.module('create pokemon card templates');

function makeCardTemplate(pokemon) {
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

test('Template test for 2 types', function(assert) {
    // Arrange
   const expected = /*html*/`
		<li>
			<h2>bulbasaur</h2>
			<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
         <p>
            <span class="type1">grass</span> <span class="type2">poison</span>
         </p>
		</li>
	`;
   const pokemon = {
      pokemon: 'bulbasaur',
      type_1: 'grass',
      type_2: 'poison',
      url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
   };
	// Act
   const result = makeCardTemplate(pokemon);
	// Assert
   assert.htmlEqual(result, expected);
});

test('Template test for 1 type', function(assert) {
    // Arrange
   const expected = /*html*/`
		<li>
			<h2>pikachu</h2>
			<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png">
         <p>
            <span class="type1">electric</span>
         </p>
		</li>
	`;
   const pokemon = {
      pokemon: 'pikachu',
      type_1: 'electric',
      type_2: 'NA',
      url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
   };
	// Act
   const result = makeCardTemplate(pokemon);
	// Assert
   assert.htmlEqual(result, expected);
});