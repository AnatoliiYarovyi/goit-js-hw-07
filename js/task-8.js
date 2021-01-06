// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов
// в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

//   <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const inputRef = document.querySelector('#controls>input');
const onBtnRenderRef = document.querySelector('button[data-action="render"]');
const onBtnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
const defaultSize = 30;

onBtnRenderRef.addEventListener('click', () => {
  const amount = Number(inputRef.value);
  if (amount < 0 || amount > 100) {
    console.error(
      `Enter a number between 0 and 100. Entered number '${amount}'`,
    );
    alert(`Введите число от 0 до 100. Введенное число '${amount}'`);
    return;
  }
  createBoxes(amount);
});
onBtnDestroyRef.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const masValues = [];
  for (let i = 0; i < amount; i += 1) {
    const divMath = document.createElement('div');
    const dimension = defaultSize + 10 * i;
    divMath.style.width = `${dimension}px`;
    divMath.style.height = `${dimension}px`;
    divMath.style.backgroundColor = get_random_color();
    masValues.push(divMath);
  }
  boxesRef.append(...masValues);
}
function destroyBoxes() {
  boxesRef.textContent = '';
  inputRef.value = 0;
}

function get_random_color() {
  function c() {
    var hex = Math.floor(Math.random() * 256).toString(16);
    return ('0' + String(hex)).substr(-2); // pad with zero
  }
  return '#' + c() + c() + c();
}
