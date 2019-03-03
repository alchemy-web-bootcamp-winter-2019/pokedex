const previousButton = document.getElementById('previous');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const nextButton = document.getElementById('next');

const PER_PAGE = 25;

export default function loadPaging(allPokemon){
    const perPagePokemon = Math.ceil(allPokemon / PER_PAGE);
    totalPages.textContent = perPagePokemon;
}