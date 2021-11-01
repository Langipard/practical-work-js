const getDiv = document.body.firstElementChild;
console.log(getDiv);

const getUl = document.body.childNodes[3];
console.log(getUl);

const takeLi = document.body.childNodes[3].lastElementChild;

console.log(getLi);

let table = document.body.children[2];
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}
