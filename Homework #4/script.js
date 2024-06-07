let firstNumber = prompt("asd")
let secondNumber = prompt("asdad")
function Calculator(a,b ) {
  this.getPlus = a;
  this.getMinus = b;
  
this.getResult = a + b;
};
let firstParseNumber = parseInt.firstNumber
let secondParseNumber = parseInt.secondNumber

let calculate = new Calculator(firstParseNumber,secondParseNumber);

alert(calculate.getResult)