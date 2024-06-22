let container = document.querySelector(".container")



container.addEventListener('click', function(event) {
    let target = event.target 
    console.log(event)
    if(target.tagName == 'BUTTON'){
        if(target.className == 'btn-1'){
            confirm("Ви натиснули кнопку 1 " )
        } else
        if(target.className == 'btn-2'){
           confirm("Ви натиснули кнопку 2")
        }else 
       
            confirm("Ви натиснули кнопку 3")
        
           }
           
})