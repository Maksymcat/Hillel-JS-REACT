
let someArr;
function Student(name,surname,dateofbirth,arr){
    this.name = name
    this.surname = surname
    this.dateofbirth = dateofbirth
    this.someArr = arr
    this.count = -1
     this.benArr =  new Array(25)

     this.benArr.splice(0,1,true)
     this.func = function(){this.benArr.forEach((elem,index) => {
        console.log('ben')
        
         if(elem === "undefined"){
       return      this.benArr.splice(this.count,1,true)}
       
        
     })}
    
       
        
}

this.absent = () => {
    this.benArr.forEach((elem) => {
        if(elem === undefined){
           this.count--
            this.benArr.push(false)
        }
    })
}
this.summary = () => {
this.count / 25
} 

let pavel = new Student('Maksym','Klimchyk',1990,[65,90,50,100,45,65,75,90,95,95,95,65,100,55] )

let pavels = new Student('Maksym','Klimchyk',1990,[65,90,50,100,45,65,75,90,95,95,95,65,100,55] )


console.log(pavel.benArr)

pavel.func()
pavel.func()
pavel.func()
pavel.func()
console.log(pavel.benArr)
  console.log(pavel)
let ber = new Array(25)
ber.join('')
console.log(typeof ber)