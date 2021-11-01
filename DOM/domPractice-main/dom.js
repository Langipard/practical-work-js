// Создать div
const div = document.createElement("div");
// Добавить к нему класс wrapper
div.className = "wrapper";
// Поместить его внутрь тэга body
document.body.append(div);
// Создать заголовок H1 "DOM (Document Object Model)"
const h1 = document.createElement("h1");
h1.textContent = "DOM (Document Object Model)";
// Добавить H1 перед DIV с классом wrapper
div.before(h1);
// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;

// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;
// =================================================
// Создать изображение
const img = document.createElement("img");
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
const imgSource = img.setAttribute("src", "https://picsum.photos/240");
// 2. Добавить атрибут width со значением 240
const imgWidth = img.setAttribute("width", "240");
// 3. Добавить класс super
const imgClassSuper = (img.className = "super");
// 4. Добавить свойство alt со значением "Super Man"
const imgAlt = img.setAttribute("alt", "Super Man");
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const divHTML = `
<div class='pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>`;
// Поместить этот DIV до элемента <ul></ul>
div.insertAdjacentHTML("beforebegin", divHTML);
// Добавить для 2-го параграфа класс text
let p2 = document.querySelector(".pDiv").querySelectorAll("p")[1];
p2.className = "text";
// Удалить 1-й параграф
document.querySelector(".pDiv").querySelectorAll("p")[0].remove();
// Создать функцию generateAutoCard,
// которая принимает 3 аргумента: brand, color, year

// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>
const generateAutoCard = (brand, color, year) => {
  const curDate = new Date();
  const curYear = curDate.getFullYear();
  return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${
    curYear - year
  } лет.</p>
            <p>Цвет: ${color}</p>
            <button type='button' class='btn'>Удалить</button>
        </div>
    `;
};
// Создать новый DIV с классом autos
const carDiv = document.createElement("div");
carDiv.className = "autos";
// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
  { brand: "Tesla", year: 2015, color: "Красный" },
  { brand: "Lexus", year: 2016, color: "Серебристый" },
  { brand: "Nissan", year: 2012, color: "Черный" },
];

const carsHTML = carsList
  .map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
  })
  .join("");
// Поместить эти 3 карточки внутрь DIV с классом autos
carDiv.insertAdjacentHTML("afterbegin", carsHTML);
// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
div.insertAdjacentElement("beforebegin", carDiv);
// Добавить кнопку Удалить на каждую карточку авто
//ыыыыыы)))00))
// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
carDiv.onclick = function (event) {
  if (event.target.className != "btn") return;
  let removeItem = event.target.closest("div");
  removeItem.remove();
};
