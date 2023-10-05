function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} //функця для отримання випадкового коьору

//отримуємо необхідні об'єкти: інпут, кнопки, div-колекція
const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

//надаємо стилі колекці, в який розміщуються елементи
divBoxes.style.display = 'flex';
divBoxes.style.gap = '20px';
divBoxes.style.flexWrap = 'wrap';
divBoxes.style.alignItems = 'center';

//навішуємо слухача на кнопку, за кліком отримуємо значення інпуту, яке = кількості елементів колекції
//після отримання значення, очищуємо поле  інпуту
btnCreate.addEventListener('click', onClick);
function onClick(event) {
  if (
    Number(inputNumber.value) < Number(inputNumber.min) ||
    Number(inputNumber.value) > Number(inputNumber.max)
  ) {
    alert('Please enter a number from 1 to 100!');
  } else {
    createBoxes(Number(inputNumber.value));
  }
  inputNumber.value = '';
}

//функця очищення колекції
btnDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes(event) {
  divBoxes.innerHTML = '';
  inputNumber.value = '';
}

//функція створення елементів колекції через elem.append()
function createBoxes(amount) {
  let step = 30;
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    step += 10;
    const box = document.createElement('div');
    box.style.width = `${step}px`;
    box.style.height = `${step}px`;
    box.style.backgroundColor = getRandomHexColor();
    arr.push(box);
  }
  divBoxes.append(...arr);
}

// функція створення елементів колекції черезз elem.insertAdjacentHTML()
// function createBoxes(amount) {
//   let step = 30;
//   const arr = [];
//   for (let i = 0; i < amount; i += 1) {
//     step += 10;
//     const box = `<div class='item' style = "background-color: ${getRandomHexColor()}; width: ${step}px; height: ${step}px"></div>`;
//     arr.push(box);
//   }
//   divBoxes.insertAdjacentHTML('beforeend', arr.join(''));
// }
