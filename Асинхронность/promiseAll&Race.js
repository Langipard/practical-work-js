// Сделайте функцию, возвращающую промис, внутри которого установлена
// случайная задержка от 1 до 10 секунд.Пусть своим результатом промис
// возвращает эту задержку.С помощью цикла и вашей функции заполните
// массив 10 - ю промисами.

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let createPromise = (numb) => {
  return (promise = new Promise((resolve) => {
    setTimeout(() => {
      //   console.log(randomNumb);
      resolve(numb);
    }, numb);
  }));
};

let arrProm = [];
for (let i = 1; i <= 10; i++) {
  let randomNumb = getRandom(1, 10) * 1000;
  arrProm.push(createPromise(randomNumb));
}

// Используя массив промисов из предыдущей задачи сделайте так,
// чтобы в консоль вывелся результат первого сработавшего промиса.

Promise.race(arrProm).then((res) => {
  console.log(res);
});

// Используя массив промисов из предыдущей задачи сделайте так,
// чтобы в консоль вывелась сумма результатов всех промисов.

Promise.all(arrProm).then((res) => {
  let reducer = (previousValue, currentValue) => previousValue + currentValue;
  let arr = res.reduce(reducer);
  console.log(arr);
});
