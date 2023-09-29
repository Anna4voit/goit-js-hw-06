//отримую кнопку за дата атрибутом
const buttonDecrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  '#counter button[data-action="increment"]'
);
//отримую значення лічильника
const counter = document.querySelector('#value');
//на кнопку навіщую слухача події по кліку з відповідними callback функціями
buttonDecrement.addEventListener('click', clickDecrement);
buttonIncrement.addEventListener('click', clickIncrement);
//початкове значення лічильника
let counterValue = 0;
//функція, що по кліку зменшує на одиницю лічильник
function clickDecrement(event) {
  counterValue -= 1;
  counter.textContent = `${counterValue}`;
  //console.log(counter.textContent);
  //   console.log(counterValue);
}
//функція, що по кліку збільшує на одиницю лічильник
function clickIncrement(event) {
  counterValue += 1;
  counter.textContent = `${counterValue}`;
  //console.log(counter.textContent);
  //   console.log(counterValue);
}

//а можна зробити взагалі цікаво: звернутися до усіх кнопок і в циклі навішати на кожну подію
//const buttons = document.querrySelectorAll('button');
// for (const button of buttons) {
//   button.addEventListener('click', countClick);
//   console.log(button);
// }
