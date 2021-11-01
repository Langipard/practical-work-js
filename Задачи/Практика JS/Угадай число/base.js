let divInfo = document.querySelector("#divInfo");
let startButton = document.querySelector("#start");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

startButton.onclick = function () {
  let curentNumber = getRandom(1, 100);
  console.log(curentNumber);
  divInfo.textContent =
    "Окей, допустим я загадал. Введи число в поле снизу этого текста и нажми на кнопку справа от поля";
  let inputNumber = document.createElement("textarea");
  let sumbitButton = document.createElement("button");
  sumbitButton.textContent = "Нажал";

  startButton.replaceWith(inputNumber, sumbitButton);

  let tryingDiv = document.createElement("div");
  divInfo.after(tryingDiv);
  let n = 10;

  sumbitButton.onclick = function () {
    inputNumber.focus();

    n -= 1;
    tryingDiv.innerHTML = `Осталось ` + n + ` попыток`;
    if (n == 0) {
      return (document.body.innerHTML = "Ты проиграл, попытки исчерпаны.");
    }

    let yourNumber = Number(inputNumber.value);
    console.log(yourNumber);
    if (yourNumber > curentNumber) {
      divInfo.innerHTML = "Я загадл меньше";
    }
    if (yourNumber < curentNumber) {
      divInfo.innerHTML = "Я загадал больше";
    }
    if (yourNumber == curentNumber) {
      return (document.body.innerHTML =
        `Ура, ты отгадал, я и вправду загадал число : ` + curentNumber);
    }
    if (
      yourNumber < 1 ||
      yourNumber > 100 ||
      Number.isInteger(yourNumber) == false
    ) {
      divInfo.innerHTML = `
            Введи число от 1 до 100, не больше и не меньше.
            <br> Вводи заново, но попытку отберу.
        `;
    }
    inputNumber.value = "";
  };
};
