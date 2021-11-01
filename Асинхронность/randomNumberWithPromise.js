function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let promise = new Promise((resolve, reject) => {
  let number = getRandom(0, 5);
  if (number == 0) {
    throw new Error("на ноль делить нелья");
  } else resolve(1 / number);
});
promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
