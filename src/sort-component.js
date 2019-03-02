const selectSort = document.getElementById('select-sort');

export default function loadSort(callback) {
   
   selectSort.addEventListener('change', () => {
      const sortOption = { sortField: selectSort.value };
      callback(sortOption);
   });

}