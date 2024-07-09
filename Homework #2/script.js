
class BankAccount {

   constructor(amount){
    this.amount = amount
   }
   getBalance(){
   return this.amount
   }
   deposit(someSum){
this.amount += someSum
   }
   withdraw(someSum){
    this.amount -= someSum
       }

    
    }
    
    const account1 = new BankAccount(1000);
    
   console.log(account1.getBalance()); // 1000
    
    account1.deposit(500);
    
    
    console.log(account1.getBalance()); // 1500
    
    account1.withdraw(200);
    
    console.log(account1.getBalance()); // 1300
































//     // OTHER DZ 
// //    const createWork = document.querySelector(".createWork")
// const someContainer = document.querySelector(".to-do-list")

// const dataInput = document.querySelector('.textOfWork')
// let textOfInput = dataInput.value


// let counter = 0
// createWork.addEventListener('click', function(event){
    
//     // let createBro = document.createElement("li")
// //   createBro.textContent = dataInput.value
   

//  counter++
//     someContainer.appendChild(createBro)
//     createBro.classList.add('bebebe')
//     createBro.id = counter
//     let liContainer = document.querySelector('.bebebe')
//     let buttonForDelete = document.createElement('button')
//     buttonForDelete.classList.add('btn-delete')
//     buttonForDelete.textContent = 'Видалити завдання'
//     liContainer.appendChild(buttonForDelete)
//     someContainer.addEventListener('click', function(event){
        
    
//     if(event.target.classList.contains('btn-delete')){
//         const lebebe = event.target.parentNode;
//         let bebebe = lebebe.id
//         let consttoRemove = document.getElementById(bebebe)
//         if(consttoRemove){
//                 consttoRemove.remove()
                
//         }
//     }
//     })

 
//})
//console.log(textOfInput)
