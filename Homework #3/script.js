let emailInput = document.getElementById('emailInput')
let emailForm = document.querySelector('.emailForm')
const nameInput = document.getElementById('nameInput')
const messageInput = document.getElementById('messageInput')
const phoneInput = document.getElementById('phoneInput')
const errorTextPhone = document.querySelector('.errorTextPhone')
const errorTextMessage = document.querySelector('.errorTextMessage')
const errorTextName = document.querySelector('.errorTextName')



function validateEmail(email){
  const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email)
}
function validateMessage(message){
  const reg = /^(?=.{5,60}$)/
  return reg.test(message)
}
function validatePhone(phone){
  const rege = /^\+380\d{9}$/
  return rege.test(phone)
}
function validateName(name){
  const regex = /^$/
  return regex.test(name)
}

emailForm.addEventListener('submit', function(){
event.preventDefault()
const errorTextEmail = document.querySelector(".errorTextEmail")
 if(!validateName(nameInput.value)){
  errorTextEmail.textContent = ''
  errorTextMessage.textContent = ''
  errorTextPhone.textContent = ''
  errorTextName.textContent = ''
 
if(validateMessage(messageInput.value)){
  errorTextEmail.textContent = ''
        errorTextMessage.textContent = ''
        errorTextPhone.textContent = ''
        errorTextName.textContent = ''
  if(validateEmail(emailInput.value)){
      errorTextEmail.textContent = ''
        errorTextMessage.textContent = ''
        errorTextPhone.textContent = ''
        errorTextName.textContent = ''

    if(validatePhone(phoneInput.value)){''
      console.log('Імя користувача --->' + `${  nameInput.value  }` +
        '   E-mail користувача ----> ' + `${  emailInput.value  }`
        + '  Повідомлення користувача ----> ' + `${  messageInput.value  }`
        +'   Мобільний номер телефону користувача -----> ' + `${  phoneInput.value}`  )
      errorTextEmail.textContent = ''
      errorTextMessage.textContent = ''
      errorTextPhone.textContent = ''
      errorTextName.textContent = ''
      phoneInput.value = ''
      messageInput.value = ''
      emailInput.value = ''
      nameInput.value = ''
     
      alert('Форма вІдправлена')
    }else{
      errorTextPhone.textContent = 'Введіть ПОВНИЙ номер, який починається на +380 '
    }
  }else{
    errorTextEmail.textContent = 'Невдало введено email'
  }
}else{
  errorTextMessage.textContent = 'Введіть 5 або більше символів'
}}else{
  errorTextName.textContent = 'Це поле обовязкове для заповнення'
}

})
 

