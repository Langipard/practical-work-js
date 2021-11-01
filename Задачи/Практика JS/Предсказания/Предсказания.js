const buttonStart = document.querySelector("#start");
const buttonStop = document.querySelector("#stop");
const timerDiv = document.querySelector("#timer");
const textDiv = document.querySelector("#text");
const yourDestiny = [
  "Выпало предсказание номер 1",
  "Выпало предсказание номер 2",
  "Выпало предсказание номер 3",
  "Выпало предсказание номер 4",
  "Выпало предсказание номер 5",
  "Выпало предсказание номер 6",
  "Выпало предсказание номер 7",
  "Выпало предсказание номер 8",
  "Выпало предсказание номер 9",
  "Выпало предсказание номер 10",
];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

buttonStart.onclick = function () {
  buttonStart.classList.remove("active");
  buttonStop.className = "active";

  let timerNumber = setInterval(() => {
    timerDiv.textContent = getRandom(1, 10);
  }, 100);

  buttonStop.onclick = function () {
    buttonStop.classList.remove("active");
    textDiv.className = "active";
    textDiv.textContent = yourDestiny[timerDiv.textContent - 1];
    clearInterval(timerNumber);
  };
};
