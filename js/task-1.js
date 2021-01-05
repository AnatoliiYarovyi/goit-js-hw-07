// Задание 1
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoryRef = document.querySelectorAll('.item');
console.log(categoryRef);
console.log(`В списке ${categoryRef.length} категории`);
console.log('================================================');
categoryRef.forEach(function (element) {
  const titleRef = element.querySelector('h2');
  const numberRef = element.querySelectorAll('li');
  console.log(
    `Категория: ${titleRef.textContent}\nКоличество элементов: ${numberRef.length}`,
  );
  console.log('================================================');
});

// --------------------------------------------------------------------------------------------------
// Альтернативное решение
// 'use strict';
// const categoryItemRef = document.querySelectorAll('.item');
// console.log(categoryItemRef);
// console.log(`В списке ${categoryItemRef.length} категории`);
// console.log('================================================');
// const categoryFirstRef = document.querySelector('.item');
// const titleFirstRef = categoryFirstRef.querySelector('h2');
// const numberFirstRef = categoryFirstRef.querySelectorAll('li');
// console.log(
//   `Категория: ${titleFirstRef.textContent}\nКоличество элементов: ${numberFirstRef.length}`,
// );
// console.log('================================================');
// const categorySecRef = categoryFirstRef.nextElementSibling;
// console.log(
//   `Категория: ${
//     categorySecRef.querySelector('h2').textContent
//   }\nКоличество элементов: ${categorySecRef.querySelectorAll('li').length}`,
// );
// console.log('================================================');
// const categoryThirdRef = categorySecRef.nextElementSibling;
// console.log(
//   `Категория: ${
//     categoryThirdRef.querySelector('h2').textContent
//   }\nКоличество элементов: ${categoryThirdRef.querySelectorAll('li').length}`,
// );
// --------------------------------------------------------------------------------------------------
