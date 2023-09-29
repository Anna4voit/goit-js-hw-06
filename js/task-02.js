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

ingredients.forEach(ingredient => {
  //створюємо елемент списку для кожного елемента масиву інградієнтів
  const itemListIngredientsEl = document.createElement('li');
  //Додаємо назву інгредієнта як його текстовий вміст
  itemListIngredientsEl.textContent = ingredient;
  //створюємо клас для кожного елементу
  itemListIngredientsEl.classList.add('item');
  //додаємо один або декілька елементів після всіх дітей елемента (кожного пункту списку)
  listIngredientsEl.append(itemListIngredientsEl);
  console.log(itemListIngredientsEl);
});

//можна зробити так ?
// const itemsEl = ingredients.map(ingredient => {
//   const itemListIngredientsEl = document.createElement('li');
//   itemListIngredientsEl.textContent = ingredient;
//   itemListIngredientsEl.classList.add('item');
//   //listIngredientsEl.append(itemListIngredientsEl);
//   return itemListIngredientsEl;
// });
// listIngredientsEl.append(...itemsEl);
