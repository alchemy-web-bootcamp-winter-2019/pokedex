export default function arraySlice(array, pagingOptions) {
    const currentPage = pagingOptions.currentPage;
    const perPage = pagingOptions.perPage;

    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    return array.slice(start, end);
}