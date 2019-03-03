const previousButton = document.getElementById('previous');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const nextButton = document.getElementById('next');

const PER_PAGE = 25;

export default function loadPaging(totalCount){
    const allPages = Math.ceil(totalCount / PER_PAGE);
    totalPages.textContent = allPages;
}