export default {
  "/handler_Users/": function ({ get }) {
    let arr = ["user1", "user2", "user3"];
    if (arr[get.key] == undefined) {
      return "false";
    } else return arr[get.key];
  },
  "/handler_GET/": function ({ get }) {
    console.log(get);
    return (
      Number(get.num1) +
      Number(get.num2) +
      Number(get.num3) +
      Number(get.num4) +
      Number(get.num5)
    );
  },
  "/handler_POST/": function ({ post }) {
    console.log(post);
    let userData = {
      login: "Illya",
      password: "parol",
    };
    if (userData.login == post.login && userData.password == post.password) {
      return "REGISTERED";
    } else return "FAILED TO REGISTERED";
  },
  "/target/": function ({ post }) {
    // let formDataTarget = new FormData(post);
    // console.log(formDataTarget);
    return "that's all, buddy";
  },
};
