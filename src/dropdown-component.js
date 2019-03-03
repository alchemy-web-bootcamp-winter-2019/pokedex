const listSort = document.getElementById('list-sort');

//loadsort function must have object to capture the result of whatever dropdown option was chosen
export default function loadSort(callback){
    listSort.addEventListener('change', () => {
        
        const sortOptions = {
            property: listSort.value
        };
        callback(sortOptions);
    });
}