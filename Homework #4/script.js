let someCounter = 0;

function Student(name, surname, dateofbirth, arr) {
  this.name = name;
  this.surname = surname;
  this.dateofbirth = dateofbirth;
  this.rating = arr;
  this.count = -1;
  this.arrayOfVisits = new Array(25);
  this.visits = 0;

  this.present = function () {
    if(this.arrayOfVisits[this.arrayOfVisits.length -1] !== undefined){
      console.log(this.arrayOfVisits)
      console.log('Массив ПЕРЕПОВНЕНИЙ ')
      return
    }
    this.visits++;
    this.count++;
    this.arrayOfVisits.splice(this.count, 1, true);
  };

  this.absent = function () {
    if(this.arrayOfVisits[this.arrayOfVisits.length -1] !== undefined){
      console.log('Массив ПЕРЕПОВНЕНИЙ ')
      return
    }
    this.visits--;
    this.count++;
    this.arrayOfVisits.splice(this.count, 1, false);
  };
  this.summary = function () {
    this.rating.forEach((element) => {
      someCounter += element;
    });
    let averageRating = someCounter / this.rating.length;
    console.log("Середня оцінка =" + averageRating);
let numberOfVisits = this.visits / 25
console.log("Середня кількість відвідувань" + numberOfVisits)
if(averageRating > 90 && numberOfVisits > 0.9){
  console.log('Молодець!')
}
if(averageRating < 90 && numberOfVisits > 0.9 || averageRating > 90 && numberOfVisits < 0.9 ){
  console.log('Добре, але можна краще')
}
if(averageRating < 90 && numberOfVisits < 0.9){
  console.log('Редиска!')
} 
    return 
  };
}

let pavel = new Student(
  "Maksym",
  "Klimchyk",
  1990,
  [100, 90, 50, 100,100 , 100, 100, 90, 95, 95, 95, 100, 100, 100]
);

let pavels = new Student(
  "Maksym",
  "Klimchyk",
  1990,
  [65, 90, 50, 100, 45, 65, 75, 90, 95, 95, 95, 65, 100, 55]
);



pavel.present();
pavel.present();
pavel.present();

pavel.absent();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present()
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.present();
pavel.summary()
console.log(pavel.arrayOfVisits);
console.log(pavel);

