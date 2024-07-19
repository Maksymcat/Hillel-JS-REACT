let timer = document.querySelector('.bober')
let countMinuts = 1
let countSeconds = 25
timer.textContent = '0' + countMinuts + ':' + countSeconds 
let ver = setInterval(function(){
countSeconds--
timer.textContent = '0' + countMinuts + ':' + countSeconds
if(countSeconds < 10){
   timer.textContent = '0' + countMinuts + ':' + '0' + countSeconds
} 
if(countSeconds === 0){
   countMinuts = 0
   timer.textContent = '0' + countMinuts + ':' + '0' + countSeconds  
   console.log('done')
   if(countMinuts === 0 ){
      clearInterval(ver)
   }
}
else{
   console.log('nihuya')
}
},1000)































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
