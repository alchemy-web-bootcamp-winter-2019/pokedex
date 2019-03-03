export default function sortFilter(testPokemon, sortOptions){
    const property = sortOptions.property;
    return testPokemon.sort((a, b) => {
        if(a[property] < b[property]){
            return -1;
        }
        if(a[property] === b[property]){
            return 0;
        }
        if(a[property] > b[property]){
            return 1;
        }
    });
}