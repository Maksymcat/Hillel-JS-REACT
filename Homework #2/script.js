function bebebe(){
    let sum = 0
return function(value){
    sum += value
    return sum;
};
   
}
let letting = bebebe()
console.log(letting(10))
console.log(letting(20))