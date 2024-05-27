function getCalculate(a){
    return(b) => {
        return a + b
    }
    
    
}
let isName = getCalculate
console.log(isName(5)(2))