const test = QUnit.test;
QUnit.module('create pokemon card templates');

function makeCardTemplate(pokemon) {
   const html = `
      <li>
         <h2>Bulbasaur</h2>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
            <p> <span class="type1">Grass</span> <span class="type2">Poison</span> </p>
        </li>
    `;
   const template = document.createElement('template');
   template.innerHTML = html;
   return template.content;
}

test('Template test', function(assert) {
    // Arrange
   const expected = /*html*/`
		<li>
			<h2>Bulbasaur</h2>
			<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
			<p> <span class="type1">Grass</span> <span class="type2">Poison</span> </p>
		</li>
	`;
   const pokemon = {
      pokemon: 'bulbasaur',
      type_1: 'grass',
      type_2: 'poison'
   };
	// Act
   const result = makeCardTemplate(pokemon);
	// Assert
   assert.htmlEqual(result, expected);
});