const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');


export function changePage(listLength, callback) {
   let currentPageNumber = 1;
   currentPage.textContent = currentPageNumber;
   const PER_PAGE = 20;
   let totalPagesNumber = Math.ceil(listLength / PER_PAGE);
   totalPages.textContent = totalPagesNumber;
   updatePageNav();
   nextButton.addEventListener('click', () => {
      currentPageNumber++;
      updatePageNav();
   });
   prevButton.addEventListener('click', () => {
      currentPageNumber--;
      updatePageNav();
   });

   function updatePageNav() {
      prevButton.disabled = currentPageNumber === 1;
      nextButton.disabled = currentPageNumber === totalPagesNumber;
      currentPage.textContent = currentPageNumber;
      const pageInfo = {
         currentPage: currentPageNumber,
         perPage: PER_PAGE
      };
      console.log(pageInfo);
      callback(pageInfo);
   }
}

