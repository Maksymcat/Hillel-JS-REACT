let birthYear = prompt('Вкажіть ваш рік народження');
if(birthYear){
    
}
else{
    alert("Шкода, що ти не ввів свій рік народження")
}
let city = prompt('В якому місті ви живете?');
if(city){

}
else{
    alert("Шкода, що ти не ввів місто, де ти проживаєш")
}
let sport = prompt('Який ваш улюблений вид спорту?');
if(sport){
}
else{
    alert("Шкода, що ти не ввів свій улюблений вид спорту")
}


let yearsOld = new Date().getFullYear() - birthYear; 




if(sport === "Бокс"){
    alert("Круто, хочеш стати як Олександр Усик?")
}else if(sport === "ММА"){
    alert("Круто, хочеш стати як Конор МакГрегор?")
}else if(sport === "Біг"){
    alert("Круто, хочеш стати як Усейн Болт?")
}

if(city === "Київ"){
    alert(`Тобі ${yearsOld} років ,Ти живеш у столиці України, ${city}`);
}
 else if(city === "Вашингтон"){
    alert(`Тобі ${yearsOld} років, Ти живеш у столиці США, ${city}`);
}
 else if(city === "Лондон"){
    alert(`Тобі ${yearsOld} років, Ти живеш у столиці Англії, ${city}`);
}
if(birthYear,city,sport) {
    alert(`Тобі ${yearsOld} років, Ти живеш у місті ${city} ` );
}


