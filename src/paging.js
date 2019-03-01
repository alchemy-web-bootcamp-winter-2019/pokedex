function getPage(data, pageNumber, pageSize) {
    const start = (pageNumber - 1) * pageSize;
    return data.slice(start, start + pageSize);
}

export default getPage;