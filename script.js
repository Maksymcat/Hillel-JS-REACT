// Homework #1

let number = 50;
console.log(typeof number);

let name = "Boris";
console.log(typeof name);

let homeWork = true;
console.log(typeof homeWork);

let people = {
    name: 'Ben',
    age: '69',

}
console.log(typeof people);

let someThing = undefined;
console.log(typeof someThing);

let bigInteger = 1221512532524324324n;
console.log(typeof bigInteger);

const uniqueID = Symbol('title');
console.log(typeof uniqueID);

let bred = function(){};
console.log(typeof bred);

//Homework #2

// let test = prompt("Яке твоє ПІБ?", 'Панасенко Іван Вікторович');
 // alert(`${test}`);                                    //this

  let userName = prompt('userName');
  let surName = prompt('surname');
  let father = prompt('father');                      //or this 
  alert(`${userName} ${surName} ${father}`);

// Homework #3
let num = 12345
  console.log(`${num}`.split("").join(" "));


