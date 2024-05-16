let number = prompt('Введіть якісь цифри');

let numbers = number.split("").join("");
if(numbers[0] === numbers[1] && numbers[1] === numbers[2] && numbers[2] === numbers[0]){
console.log("Всі цифри однакові")
}else if(numbers[0] === numbers[1] || numbers[0] === numbers[2] || numbers[1] === numbers[2]){
    console.log("Є однакові цифри")
}
else{
    console.log("Нема однакових цифр")
}