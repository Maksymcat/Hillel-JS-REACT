function findAverage(arr) {
    let sum = 0;
    let numbers = 0;

    arr.forEach(function(element) {
        
        if (typeof element === 'number' && !isNaN(element)) {
            sum += element;
            numbers++;
        }
    });

    if (numbers === 0) {
       
        return NaN;
    }

    let average = sum / numbers;
    return average;
}


let myArr = [35, , "3", 70, "5",105]; 
let average = findAverage(myArr);
console.log("Середнє арифметичне: " + average);