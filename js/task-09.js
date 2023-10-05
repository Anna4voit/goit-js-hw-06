function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} //функція для генерації випадкового кольору

//достаємо кнoпку і спан
const button = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

//навішуємо на кнопку подію клік
button.addEventListener('click', bgBodyChange);

//функція для зміни кольору body і виводу значення кольору
function bgBodyChange(event) {
  let color = getRandomHexColor();
  textColor.textContent = color;
  document.body.style.backgroundColor = color;
}
