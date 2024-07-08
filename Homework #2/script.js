


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