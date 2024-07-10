
let currentdate = new Date()
function Student(name, surname, dateofbirth, arr) {
  this.name = name;
  this.surname = surname;
  this.dateofbirth = dateofbirth ;
  this.age = currentdate.getFullYear() - this.dateofbirth
  this.rating = arr;
  this.count = -1;
  this.arrayOfVisits = new Array(25);
  this.visits = 0;
  this.someCounter = 0

  this.present = function () {
    if(this.arrayOfVisits[this.arrayOfVisits.length -1] !== undefined){
   
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
      this.someCounter += element;
    });
    console.log('Йому  ' + `${  this.age  }` +  '  років')
    let averageRating = this.someCounter / this.rating.length;
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
  "bro",
  1990,
  [100, 90, 50, 100,100 , 100, 100, 90, 95, 95, 95, 100, 100, 100]
);

let stefany = new Student(
  "stepan",
  "lamboilifero",
  1985,
  [65, 50, 50, 45, 45, 65, 75, 35, 40, 70, 25, 65, 75, 55,55,55,55]
);
let houston = new Student(
  "hrihory",
  "bred-pit",
  1990,
  [100, 90, 50, 100, 95, 100, 100, 90, 95, 95, 95, 65, 100, 100]
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
pavel.summary()


stefany.present();
stefany.present();
stefany.present();
stefany.absent();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present()
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.present();
stefany.summary()

