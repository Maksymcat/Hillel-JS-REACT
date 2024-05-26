let myArr = [1,2,3,4,5,6]
let newArr  = []

function removeElement(a,b){
  

 for( i = 0;i <= myArr.length;i++){
  if(b !== myArr[i]){
    newArr.push(myArr[i])
  }

  
 }
 
 return newArr.join("")
}
let bestArray = removeElement(newArr,1)
console.log(bestArray)
