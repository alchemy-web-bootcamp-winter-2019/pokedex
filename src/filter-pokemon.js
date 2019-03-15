export default function filterPokemon(pokemon, filter) {
    return pokemon.filter(poke => {
        const hasType = !filter.type_1 || poke.type_1 === filter.type_1;
        const hasName = !filter.pokemon || poke.pokemon === filter.pokemon;
        return hasType && hasName;
    });
}