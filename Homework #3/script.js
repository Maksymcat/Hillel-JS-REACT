function getCalculate() {
  let userInput;
  let number;
  for (let i = 0; i < 10; i++) {
    userInput = prompt("Введіть будь-яке число більше 100");
    number = parseInt(userInput);
    let ben = 1;
    ben += i;

    if (number <= 100 && ben === 10) {
      console.log(
        "Досягнуто максимально спроб, останнє введене значення --->   " +
          number
      );
      return;
    } else if (number <= 100) {
      console.log("Введіть ще раз");
    } else if (number > 100 && typeof number === "number") {
      console.log("Ви ввели більше ста --->  " + number);
      return;
    } else if (typeof userInput !== "number") {
      alert("Введіть число");
    }
  }
}

getCalculate();
