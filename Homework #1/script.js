let sliderLine = document.querySelector('.slider__line')
let images = document.querySelectorAll('.slider__img')

 let nextButton = document.querySelector('.button-next')
 let prevButton = document.querySelector('.button-prev')

let width;
let count = 0;
function init(){
  width = document.querySelector('.slider__block').offsetWidth;
  sliderLine.style.width = `${width * images.length}px`;
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  })
  console.log(width)
  console.log(  sliderLine.style.width)
}
init()
window.addEventListener('resize', init)
function rollSlider(){
  sliderLine.style.transform = 'translate(-'+ count * width + 'px';
  console.log(sliderLine.style.transform)
  console.log(count * width)
}
window.addEventListener('DOMContentLoaded', deleteButton)
function deleteButton(){

    prevButton.classList.add('hidden')
  
  
}
function sliderNext(){

  count++
  prevButton.classList.remove('hidden')
 
  if(count >= images.length -1){
   
    nextButton.classList.add('hidden')
    
   
  }
  rollSlider()
} 


if(nextButton !== null){
  nextButton.addEventListener('click', sliderNext)
}
function sliderPrev(){
  count--
  nextButton.classList.remove('hidden')
  if(count <= 0){
    prevButton.classList.add('hidden')
  
  }

  
  rollSlider()
}
if(prevButton !== null){
  prevButton.addEventListener('click', sliderPrev )
}