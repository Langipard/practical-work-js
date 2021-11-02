export default {
  "/handler/": function ({ get }) {
    return get.num ** 2;
  },
  "/sumNumb/": function ({ get }) {
    return Number(get.num1) + Number(get.num2);
  },
  "/searchElemOfArray/": function ({ get }) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return arr[get.num - 1];
  },
  "/formWithFetch/": function ({ get }) {
    return Number(get.num1) + Number(get.num2) + Number(get.num3);
  },
  "/PostWithFetch/": function ({ post }) {
    let sum =
      Number(post.num1) +
      Number(post.num2) +
      Number(post.num3) +
      Number(post.num4) +
      Number(post.num5);
    return sum / 5;
  },
};
