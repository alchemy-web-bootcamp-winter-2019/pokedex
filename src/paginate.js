export default function paginatePokemon(allPokemon, paginateParams){


    console.log('paginate params', paginateParams);
    const startingIndex = (paginateParams.numberOfPokemon * paginateParams.currentPage) - paginateParams.numberOfPokemon;
    const endingIndex = (paginateParams.numberOfPokemon * paginateParams.currentPage);
    return allPokemon.slice(startingIndex, endingIndex); 
}
