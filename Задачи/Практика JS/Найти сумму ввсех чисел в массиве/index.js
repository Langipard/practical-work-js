let arr = [1, 2, 3, [1, 2, [1, 2, 3], 32], 4, 5, 6, [1, 2, [1, [2, [3]]]], 4];
let arrTest = [1, [1, 5, 5, 4]];
let sumArr = (previousValue, item) => {
  console.log("prev=" + previousValue, "item=" + item);
  if (Array.isArray(item) == true) {
    item = item.reduce(sumArr);
  }

  console.log("summ=" + (item + previousValue), "item=" + item);
  return item + previousValue;
};
let sum = arr.reduce(sumArr);
console.log(sum);
