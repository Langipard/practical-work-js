var countBits = function (n) {
  n = n.toString(2);
  let result = n.split("").reduce((prev, next) => {
    return Number(prev) + Number(next);
  });
  console.log(result);
  return +result;
};

countBits(5);
countBits(7);
countBits(1000);
