let a = prompt('Введіть якусь цифру');
let b = prompt('Введіть якусь цифру');
let c = prompt('Введіть якусь цифру');

if(a === b && b === c && c === a){
console.log("Всі цифри однакові")

}else if(a === b || a === c || b === c ){
    console.log('Є деякі однакові цифри')
    } else {   console.log("Ні одноі одинаковоі цифрипш")
}
