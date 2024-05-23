const fruits = prompt("asdasd")
const fruitss = fruits.split("")
let letter = prompt("asdasd");

  
  const filterItems = (arr, query) => {

  return arr.filter(
    (el) => el.indexOf(query) === -1,
  ).join("  ");
};

console.log(filterItems(fruitss, `${letter}`));
console.log(filterItems(fruitss, `${letter}`)); 