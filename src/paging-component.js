const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 20;

export default function loadPaging(totalCount) {

    const totalPageCount = Math.ceil(totalCount / PER_PAGE);
    totalPages.textContent = totalPageCount;

    let currentPageNumber = 1;
    currentPage.textContent = currentPageNumber;

    nextButton.addEventListener('click', () => {
        currentPageNumber++;

        currentPage.textContent = currentPageNumber;

        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        console.log(pagingOptions);
    });
}



