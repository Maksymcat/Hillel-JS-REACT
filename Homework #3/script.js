let numbers = prompt("123455")
let numbersArr = numbers.split("")

 
  const removeElement = (array, item) => {

  return array.filter(
    (el) => el.indexOf(item) === -1,
  )
};

console.log(removeElement(numbersArr, 3));
console.log(removeElement(numbersArr,3)); 