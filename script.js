let someObject = {
  phoneBook: [{name: 'Maksym',
  phoneNumber: '+38099321543',
  email: 'enotglobaldisfunction@gmail.com',},
   {name:'Vanya',phoneNumber:'+38023213535',email:'vanyoknehacker@gmail.com',},
   {name:'Oleksii',phoneNumber:'+3807777777',email:'lyohazeroproblem@gmail.com',}],
  findUserByName(userNickName){
  let result = this.phoneBook.filter((user) => {
      return user.name === userNickName
  })
  return result;
  },
  
  
  
  
  }
  function CreateNewContact(name,phoneNumber,email){
      this.name = name 
      this.phoneNumber = phoneNumber
      this.email = email
    
      }
  
  let newUser = new CreateNewContact('aleksandr','38093242344','sashaverni100@gmail.com')
  someObject.phoneBook.push(newUser)
  console.log(someObject.findUserByName('aleksandr'))
  