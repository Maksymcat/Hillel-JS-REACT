let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
internals: [{name: 'Jack', salary: 1300}]
  }
  
}
let couter;
let counter;
function sumOfSalary(obj){
  couter = 0
  counter = 0
    for(key in obj){
      let salaryDI = obj.development.internals[counter].salary
      let salaryDW = obj.development.web[counter].salary
      let salarySales = obj.sales[counter].salary
      counter++
      couter += salaryDI
      couter += salarySales
      couter += salaryDW
   
      console.log(couter)
     if(counter >= 2){
      console.log('worked')
      counter = 0 
      return sumOfSalary(obj.development.web[counter].salary)
     }
  }
  return sumOfSalary(obj.sales);
}
sumOfSalary(company)

