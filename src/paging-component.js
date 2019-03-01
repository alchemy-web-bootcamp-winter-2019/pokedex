const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');
const PER_PAGE = 20;

export default function loadPaging(total, callback) {
    let currentPage = 1;
    const pages = Math.ceil(total / PER_PAGE);
    totalPagesSpan.textContent = pages;
    updatePaging();
    function updatePaging() {
        currentPageSpan.textContent = currentPage;
        callback(currentPage, PER_PAGE);
        previousButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === pages;
    }
    nextButton.addEventListener('click', () => {
        currentPage++;
        updatePaging();
    });

    previousButton.addEventListener('click', () => {
        currentPage--;
        updatePaging();
    });
}