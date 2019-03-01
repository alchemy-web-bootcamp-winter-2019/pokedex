const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 20;

export default function loadPaging(totalCount, callback) {

    const totalPageCount = Math.ceil(totalCount / PER_PAGE);
    totalPages.textContent = totalPageCount;

    let currentPageNumber = 1;
    updatePaging();

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        updatePaging();
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        updatePaging();
    });




    function updatePaging() {
        currentPage.textContent = currentPageNumber;
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        callback(pagingOptions);
        nextButton.disable = currentPageNumber === totalPageCount;
        //if page === 1, disable previous button.
        previousButton.disable = currentPageNumber === 1;
    }
}



