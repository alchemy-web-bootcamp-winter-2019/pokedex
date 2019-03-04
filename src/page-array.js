export default function pageArray(cardList, pageInfo) {
   const startIndex = (pageInfo.currentPage - 1) * pageInfo.perPage;
   const endIndex = startIndex + pageInfo.perPage;
   return cardList.slice(startIndex, endIndex);
}