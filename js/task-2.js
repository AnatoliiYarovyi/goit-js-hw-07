// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');
console.log(listRef);
const ingredientsList = ingredients.map(function (element) {
  const item = document.createElement('li');
  listRef.appendChild(item);
  item.textContent = element;
  return item;
});

// -------------------Альтернативное решение---------------------------------
// const listRef = document.querySelector('#ingredients');
// console.log(listRef);
// ingredients.forEach(function (element) {
//   const item = document.createElement('li');
//   listRef.appendChild(item);
//   item.textContent = element;
// });
