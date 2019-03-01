const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');
const PER_PAGE = 20;

export default function loadPaging(total, callback) {
    const pages = Math.ceil(total / PER_PAGE);
    totalPagesSpan.textContent = pages;
    let currentPage = 1;
    updatePaging();
    function updatePaging() {
        currentPageSpan.textContent = currentPage;
    }
    nextButton.addEventListener('click', () => {
        currentPage++;
        updatePaging();
    });

    previousButton.addEventListener('click', () => {
        currentPage--;
        updatePaging();
    });

    callback();
}