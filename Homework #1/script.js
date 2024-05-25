function addElement(){
    let sum = 0
   return function(value){
    sum += value;
    return sum;
   };
}
let sum = addElement();
console.log(sum(50))
console.log(sum(50))