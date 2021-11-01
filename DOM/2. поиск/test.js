// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

//1
const table = document.getElementById("age-table");
console.log(table);

//2
console.log(table.querySelectorAll("label"));

//3
console.log(table.getElementsByTagName("td")[0]);

//4
let form = document.querySelectorAll("form");
console.log(form[0]);

//5
let input = document.querySelectorAll("input");
console.log(input[0]);

//6
console.log(input[input.length - 1]);
