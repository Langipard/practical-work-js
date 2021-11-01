//промисификация загрузки картинок
let loadImg = (path) => {
  return (promise = new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.src = path;
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("image in URL: " + path + " not found."));
    });
  }));
};

loadImg("https://klike.net/uploads/posts/2019-05/1556945414_2.jpg")
  .then((result) => {
    document.body.append(result);
  })
  .catch((error) => {
    console.log(error);
  });

//   Напишите код, который дождется окончания
//   загрузки всех картинок, а затем добавит их в цикле в конец body.

let paths = [
  "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg",
  "https://vjoy.cc/wp-content/uploads/2020/03/vvvvvvvvvvvvvvmi.jpg",
  "https://klike.net/uploads/posts/2019-05/1556945414_2.jpg",
];

for (let path of paths) {
  loadImg(path).then((result) => {
    document.body.append(result);
  });
}
