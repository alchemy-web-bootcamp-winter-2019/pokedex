const previousButton = document.getElementById('previous');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const nextButton = document.getElementById('next');

const PER_PAGE = 25;

export default function loadPaging(allPokemon, callback){
    //setting the parameter to allpokemon will accept our full pokedex object
    const perPagePokemon = Math.ceil(allPokemon / PER_PAGE);
    //math.ceil divides the total amount of allPokemon(which will be our pokedex object) by the perpage constant
    //arbitrarily chosen to be 25
    totalPages.textContent = perPagePokemon;
    //setting the content of the total-pages id to display the result of the math.ceil evaluation

    let currentPageNumber = 1;
    // currentPage.textContent = 1;
    updatePaging();

    function updatePaging(){
        currentPage.textContent = currentPageNumber;
        
        const pageOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        
        callback(pageOptions);

        nextButton.disabled = currentPageNumber === perPagePokemon;
        previousButton.disabled = currentPageNumber === 1;
    }

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        updatePaging();
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        updatePaging();
    });

}