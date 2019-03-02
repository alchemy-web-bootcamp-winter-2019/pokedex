export default function sortByChoice(pokeList, sortOption) {
   const field = sortOption.sortField;
   return pokeList.sort((a, b) => {
      if(a[field] === b[field]) {
         return 0;
      }
      if(a[field] > b[field]) {
         return 1;
      }
      return -1;
   });
}