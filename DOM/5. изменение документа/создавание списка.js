let ul = document.createElement("ul");
document.body.append(ul);

let asker = () => {
  yourText = prompt("вводи че надо в список");
  if (yourText !== "" && yourText !== null) {
    //let ul = document.getElementsByTagName("ul")[0];
    let mountLi = document.createElement("li");
    mountLi.textContent = yourText;
    ul.append(mountLi);
    asker();
  }
};

asker();

// А вот предоставленное решение с учебника
// Из заметок.
// 1. B if !не работает перед переменной как во втором варианте
// 2. У меня код менее лаконичный и понятливый
// while (true)... Ты естественно забыл, что это бесконечный цикл

// while (true) {
//   let data = prompt("Введите текст для элемента списка", "");

//   if (!data) {
//     break;
//   }

//   let li = document.createElement("li");
//   li.textContent = data;
//   ul.append(li);
// }
