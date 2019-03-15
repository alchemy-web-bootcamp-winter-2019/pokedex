const filterForm = document.getElementById('filter-form');

export default function loadFilter(callback) {
    filterForm.addEventListener('submit', event => {
        event.preventDefault();
    
        const formData = new FormData(filterForm);
        const filter = {
            type_1: formData.get('type'),
            pokemon: formData.get('name')
        };
        callback(filter);
    });
}