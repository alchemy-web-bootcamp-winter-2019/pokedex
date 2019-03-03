export default function filterPokedex(testArray, chosenType) {
    return testArray.filter(item => {
        const hasType = !chosenType.type_1 || chosenType.type_1 === item.type_1;
        console.log('hasType', hasType);
        return hasType;
    });
}
