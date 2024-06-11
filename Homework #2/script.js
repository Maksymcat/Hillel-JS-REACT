let textColor = document.querySelector("div")
let someBtn = document.querySelector("button")
function changeColorOnClick(event){ 
   textColor.classList.toggle("black")
}
someBtn.addEventListener('click', changeColorOnClick)