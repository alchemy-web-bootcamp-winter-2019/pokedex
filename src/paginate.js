export default function paginatePokemon(allPokemon, paginateParams){
    const startingIndex = (paginateParams.numberOfPokemon * paginateParams.currentPage) - paginateParams.numberOfPokemon;
    const endingIndex = (paginateParams.numberOfPokemon * paginateParams.currentPage);
    return allPokemon.slice(startingIndex, endingIndex); 
}
