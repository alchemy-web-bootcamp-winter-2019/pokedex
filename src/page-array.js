// function that takes two arguments: an array of stuff and paging options
// paging options includes the current page you are on and how many items displayed on the page
export default function pageArray(testPageArray, pagingOptions) {
    const page = pagingOptions.page;
    const perPage = pagingOptions.perPage;
    
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return testPageArray.slice(startIndex, endIndex);
}