
const pokeNumberNode = document.getElementById('choices-ui');
const nextButtonNode = document.getElementById('next-button');
const prevButtonNode = document.getElementById('previous-button');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');


let page = 1;


export default function loadPaging(callback) {

    updatePaging();
    //update paging    
    function updatePaging() {
        let perPage;
        perPage = pokeNumberNode.value ? pokeNumberNode.value : 25;

        const params = {
            numberOfPokemon: perPage,
            currentPage: page,
            totalPagesNode: document.getElementById('total-pages'),
        };
        currentPageNode.innerHTML = `page:${page}`;
        callback(params, totalPagesNode, perPage);
    }

    // event handler for prev button
    prevButtonNode.addEventListener('click', () => {
        page--;
        updatePaging();
    });

    //event handler for next button   
    nextButtonNode.addEventListener('click', () => {
        page++;
        updatePaging();
    });
}



