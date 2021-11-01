function make(callback) {
  setTimeout(function () {
    let res = [1, 2, 3, 4, 5];
    callback(res); // передаем результат параметром
  }, 1000);
}

make(function (res) {
  let reducer = (previousValue, currentValue) => previousValue + currentValue;
  let arr = res.reduce(reducer);
  console.log(arr); // наш массив
});
