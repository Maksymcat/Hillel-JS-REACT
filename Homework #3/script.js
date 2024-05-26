function getCalculate(){

  let myArr = []

outer: for (i = 0;i < 10;i++)  {
  let number = prompt("Введіть будь-яке число більше 100")
 
   if(number <= 100  ){
   
    alert("Введіть ще раз")
  }else if(number > 100){
    myArr.push(number)
    break outer;
  }else if(typeof number !== "number"){
    alert("Введіть число")
  }else if(i === 10){
    break outer;
  }
}
myArr.forEach(element => {
  console.log(element)
});
}

getCalculate()
