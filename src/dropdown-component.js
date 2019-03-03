const listSort = document.getElementById('list-sort');
const currentPage = document.getElementById('current-page');

let currentPageNumber = 1;
//loadsort function must have object to capture the result of whatever dropdown option was chosen
export default function loadSort(callback){

    
    listSort.addEventListener('change', () => {
        currentPage.textContent = currentPageNumber;
        
        const sortOptions = {
            property: listSort.value
        };
        callback(sortOptions);
    });
}