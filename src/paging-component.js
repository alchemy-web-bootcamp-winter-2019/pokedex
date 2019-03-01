const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');

const PER_PAGE = 22;

export default function loadPaging(totalCount) {
    const totalPageCount = Math.ceil(totalCount / PER_PAGE);
    totalPagesSpan.textContent = totalPageCount;
    let currentPageNumber = 1;
    currentPageSpan.textContent = currentPageNumber;

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        currentPageSpan.textContent = currentPageNumber;
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        console.log(pagingOptions);
        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        currentPageSpan.textContent = currentPageNumber;
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        console.log(pagingOptions);
        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;
    });
}