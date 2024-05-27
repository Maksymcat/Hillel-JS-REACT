let bobik = [1,2,3,4,"adasd","adssa",5]

let allSum = function(someArray){
    let numbers;
let ben; 
    return someArray.reduce((acc, number) => {
        
        if(typeof number === "number"){
      acc += number
      
      
    
      }

     
    
  return acc / 5
      
    }, 0)
};
console.log(allSum(bobik))