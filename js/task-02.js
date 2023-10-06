const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//знаїодимо список за id
const listIngredientsEl = document.querySelector('#ingredients');
const list = [];
ingredients.forEach(ingredient => {
  //створюємо елемент списку для кожного елемента масиву інградієнтів
  const itemListIngredientsEl = document.createElement('li');
  //Додаємо назву інгредієнта як його текстовий вміст
  itemListIngredientsEl.textContent = ingredient;
  //створюємо клас для кожного елементу
  itemListIngredientsEl.classList.add('item');
  //створюємо масив усіх елементів
  list.push(itemListIngredientsEl);
});
//додаємо  елементи після всіх дітей елемента (кожного пункту списку)
listIngredientsEl.append(...list);

//можна зробити так
// const itemsEl = ingredients.map(ingredient => {
//   const itemListIngredientsEl = document.createElement('li');
//   itemListIngredientsEl.textContent = ingredient;
//   itemListIngredientsEl.classList.add('item');
//     return itemListIngredientsEl;
// });
// listIngredientsEl.append(...itemsEl);
