let result;
function getCalculate(a){
   
    return(b) => {
        result = a + b
        return a + b
    }
    
    
}
let isName = getCalculate
isName(7)(2)
console.log(result)