
function myNane(arr){
    let sum = 0
    let numbers = 0
    for(let argument of arr){
      if(typeof argument === "number" )
sum += argument
      numbers++
      let target = sum  / numbers 
      console.log(target)
      return target;
    }
            
}
let myArr = ["asdasd","asdasd",5,10,20]
let average = myNane(myArr)
console.log(average)