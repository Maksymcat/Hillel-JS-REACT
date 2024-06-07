let  usName;
let salary;
let someObject = {
name: 'mariHanna',
salary: 15000,
myFunc: function bebebe(...someBase){
    usName = this.name
    salary = this.salary
    console.log('Імя === ' + `${usName}`+ ' Зарплата === ' + `${salary}`)
    return;
}
}
console.log(someObject.myFunc())