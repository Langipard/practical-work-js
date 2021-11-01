function make(num1, num2, callback) {
  setTimeout(function () {
    let arr = [1, 2, 3, 4, 5];
    callback(arr[num1] + arr[num2]); // результатом передаем элемент массива
  }, 3000);
}

make(2, 3, function (res) {
  console.log(res); // третий элемент массива
});
