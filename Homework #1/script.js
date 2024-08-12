const Lohness = (callback) => {
let usname = 'maks'
let age = prompt('age')
callback(age)
}

const ben = (callbackHell, callback) => {
    let ages = callbackHell
    let names = 'Maks'
    console.log(callbackHell)
callback(callbackHell)
 
   
}
const brother = (ages) => {
    console.log(ages)
}

Lohness((age) => {
    ben((age, ages) => brother(age,ages))
})