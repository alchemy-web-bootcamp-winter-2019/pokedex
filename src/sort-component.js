export default function loadSort(callback) {

    const sortSelect = document.getElementById('sort-select');
    
    sortSelect.addEventListener('change', () => {
        const sortKey = sortSelect.value;
        callback(sortKey);
    });
}
