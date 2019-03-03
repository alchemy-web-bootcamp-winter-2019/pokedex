export default function pageArray(testArray, pagingOptions){
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;

    const startIndex = ((page - 1) * perPage);
    const endIndex = perPage + startIndex;

    return testArray.slice(startIndex, endIndex);
}
