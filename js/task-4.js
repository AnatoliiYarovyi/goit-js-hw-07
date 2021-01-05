// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let counterRef = document.querySelector('#value');
let counterValueRef = [counterRef.textContent];
console.log(counterRef);
console.log(counterValueRef);

const decrementRef = document.querySelector('button[data-action="decrement"]');
console.log(decrementRef);

const incrementRef = document.querySelector('button[data-action="increment"]');
console.log(incrementRef);

const decrement = () => {
  counterRef.textContent = counterValueRef.map(element => {
    const i = Number(element) - 1;
    return i;
  });
  return counterValueRef.splice(0, 1, counterRef.textContent);
};
const increment = () => {
  counterRef.textContent = counterValueRef.map(element => {
    const i = Number(element) + 1;
    return i;
  });
  return counterValueRef.splice(0, 1, counterRef.textContent);
};

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
