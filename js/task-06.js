//отримуємо інпут
const inputEl = document.querySelector('#validation-input');
//console.dir(inputEl);
//так можна отримати значення атрибуту інпуту
//console.log(inputEl.getAttribute('data-length'));
//отримуємо значення атрибуту інпуту, тобто довжину для порівняння
const length = Number(inputEl.dataset.length);
//console.log(typeof length);

//навішуємо слухача на інпут - блюр
inputEl.addEventListener('blur', changeStyle);

//робимо колбек-функцію
function changeStyle(event) {
  //отримуємо довжину  рядка, що вводиться в поле
  const valueInput = event.currentTarget.value.trim().length;
  //порівнюємо довжину рядка із значенням атрибуту і змінюємо колір бордеру
  if (valueInput === length) {
    updateClassList('valid', 'invalid');
  } else {
    updateClassList('invalid', 'valid');
  }
}
function updateClassList(a, b) {
  inputEl.classList.add(a);
  inputEl.classList.remove(b);
}

//Метод trim() удаляет пробельные символы с начала и конца
//строки.Пробельными символами в этом контексте считаются все
//собственно пробельные символы(пробел, табуляция, неразрывный
//пробел и прочие) и все символы конца строки(LF, CR и прочие).
//тому можна ще зробити так
//const valueInput = inputEl.value.trim().length;
