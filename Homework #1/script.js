let someNumber = 2;

let someBtn = document.querySelector("button");
let newDiv = document.createElement("div");
let parentElement = document.getElementById("lere");
parentElement.appendChild(newDiv);
someBtn.addEventListener("click", tableOfPifagor);
function tableOfPifagor(event) {
  let result;
  for (let i = 2; someNumber < 10; i++) {
    result = `${someNumber}` * `${i}`;

    
    newDiv.innerHTML +=
    "  |||  " + ` ${someNumber}  ` +
      "  *  " +
      ` ${i} ` +
      "  ========  " + 
      ` ${result} ` + "  |||  ";

    if (i >= 9) {
      
newDiv.innerHTML += "<<-----" +  "Табличка множення на " + someNumber
      i = 2;
      someNumber += 1;
      return
    }
  }
}
