export default function pageArray(testPageArray, pagingOptions) {
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;
    
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return testPageArray.slice(startIndex, endIndex);
}