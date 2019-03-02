export default function sortData(data, sortKey) {
    return data.sort((a, b) => {
        if(a[sortKey] === b[sortKey]) {
            return 0;
        }
        if(a[sortKey] < b[sortKey]) {
            return -1;
        }
        return 1;
    });
}