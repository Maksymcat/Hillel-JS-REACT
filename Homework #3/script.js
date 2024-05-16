let n = prompt("Введіть ціле число")

outer : for(i = 1;i <= 100;i++){
    let i2 = i * i;
   
    if(i2 > n){
        
    break outer;
         
    }
    console.log(i)
}

