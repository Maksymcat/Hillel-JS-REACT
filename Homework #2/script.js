let userData; 
let someBtn = document.querySelector(".get")
let someButton = document.querySelector(".push")
function getUserData(event){
userData = prompt("Введіть URL")

}
function useUserData(){
    window.open(userData)
}

someBtn.addEventListener("click", getUserData)
someButton.addEventListener("click", useUserData)
    
