
  const filterItems = (arr, query) => {

  return arr.filter(
    (el) => el.indexOf(query) === -1,
  )
};

console.log(filterItems([1,2,3,4,5], 3));
console.log(filterItems([1,2,3,4,5], 3)); 