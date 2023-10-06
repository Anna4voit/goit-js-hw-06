const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
const arr = [];
images.forEach(image => {
  //створюємо шаблонний рядок
  const itemListEl = `<li><img  src="${image.url}" alt="${image.alt}"  style = "width: 500px; height: 100%"/></li>`;
  arr.push(itemListEl);
});
//додаємо кожен елемент до списку
gallery.insertAdjacentHTML('beforeend', arr.join(''));

// додати  деякі стилі: прибераємо маркування списку, додаємо флексбокс
gallery.style.listStyleType = 'none';
gallery.style.display = 'flex';
gallery.style.justifyContent = 'space-around';
gallery.style.padding = '20px';

// const itemGallery = images
//   .map(
//     ({ url, alt }) =>
//       `<li><img  src="${url}" alt="${alt}" style = "width: 500px; height: 100%" /></li>`
//   )
//   .join('');
// console.log(itemGallery);
// gallery.insertAdjacentHTML('beforeend', itemGallery);
