const previousButton = document.getElementById('previous-button');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');
const nextButton = document.getElementById('next-button');

const PER_PAGE = 25;

export default function loadPaging(totalCount, callback) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);

    totalPagesSpan.textContent = totalPageCount;

    let currentPageNumber = 1;
    updatePaging();

    function updatePaging() {
        currentPageSpan.textContent = currentPageNumber;

        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };

        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.dispabled = currentPageNumber === 1;

        callback(pagingOptions);
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