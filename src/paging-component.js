const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

let currentPageNumber = 1;
currentPage.textContent = currentPageNumber;

export function changePage(pokeList) {
   const PER_PAGE = 100;
   let totalPagesNumber = Math.ceil(pokeList.length / PER_PAGE);
   totalPages.textContent = totalPagesNumber;
   updatePageNav();
   nextButton.addEventListener('click', () => {
      currentPageNumber++;
      updatePageNav();
   });
   prevButton.addEventListener('click', () => {
      currentPageNumber--;
      updatePageNav()
   });

   function updatePageNav () {
      prevButton.disabled = currentPageNumber === 1;
      nextButton.disabled = currentPageNumber === totalPagesNumber;
      currentPage.textContent = currentPageNumber;
   }
}
   



