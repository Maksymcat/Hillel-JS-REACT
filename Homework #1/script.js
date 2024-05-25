
function express(a){

let massivch = "wafasad";
let massiv = massivch.split("");
let lett = "a"
let noul;
for(let index of massiv){
    if(index !== lett){
        noul = 0
        noul += index

        console.log(index)
        return noul;
    }

}
let expression = express(a)
console.log(expression)
}
