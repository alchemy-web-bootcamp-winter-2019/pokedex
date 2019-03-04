export default function filterPokedex(pokedex, chosenType) {
    return pokedex.filter(item => {
        const hasType = !chosenType.type_1 || chosenType.type_1 === item.type_1;
        console.log('hasType', hasType);
        return hasType;
    });
}


//I can filter the array and return boolean on if it's to be included int he filter. 
//who calls this function? It's data is needed to render the cards. 