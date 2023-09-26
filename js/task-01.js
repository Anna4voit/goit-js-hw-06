// Порахуємо і виведемо у консоль кількість категорій в списку
const listEl = document.querySelector('#categories');
//console.log(listEl); виводить весь список
console.log('Number of categories: ', listEl.children.length);
//або таким чином
//const amountCategoriesEl =
//   document.querySelector('#categories').children.length;
// console.log(amountCategoriesEl);

//Порахує і виведе текст заголовку елемента
const titleListEl = listEl.querySelectorAll('h2');
//console.log(titleListEl); виводить псевдомасив заголовків
titleListEl.forEach(title => {
  console.log('Category: ', title.textContent);
  console.log('Elements: ', title.nextElementSibling.children.length);
  // шукає у наступного сусіда нащадків і виводить їх кількість
});
