let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
      { name: "ben", salary: 2000 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

let sumOfSalarys = 0;

function sumOfSalary(obj) {
  for (key in obj) {
    let chooseObj = obj[key];
    if (Array.isArray(chooseObj)) {
      for (key2 of chooseObj) {
        sumOfSalarys += key2.salary;
      }
    } else {
      return sumOfSalary(chooseObj);
    }
  }

  console.log(sumOfSalarys);
}

sumOfSalary(company);
