const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 21;

export default function loadPaging(totalPokedex) {
    const totalPageCount = Math.ceil(totalPokedex / PER_PAGE);
    totalPages.textContent = totalPageCount;
    
    let currentPageCount = 1;
    updatePaging();
    
    function updatePaging() {
        currentPage.textContent = currentPageCount;
        previousButton.disabled = currentPageCount === 1;
        nextButton.disabled = currentPageCount === totalPageCount;

        const pagingOptions = {
            currentPage: currentPageCount,
            perPage: PER_PAGE
        };
        console.log(pagingOptions);
    }

    previousButton.addEventListener('click', () => {
        currentPageCount--;
        updatePaging();
    });

    nextButton.addEventListener('click', () => {
        currentPageCount++;
        updatePaging();
    });

}