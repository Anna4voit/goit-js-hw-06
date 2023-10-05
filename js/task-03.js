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
images.forEach(image => {
  //створюємо шаблонний рядок
  const itemListEl = `<li ><img  src="${image.url}" alt="${image.alt}" width = 500 height = auto /></li>`;
  //додаємо кожен елемент до списку
  gallery.insertAdjacentHTML('beforeend', itemListEl);
  console.log(itemListEl);
});

//можна додати  деякі стилі: прибераємо маркування списку, додаємо флексбокс
// gallery.style.listStyleType = 'none';
// gallery.style.display = 'flex';
// gallery.style.justifyContent = 'space-around';
// gallery.style.padding = '20px';

// const itemGallery = images
//   .map(
//     ({ url, alt }) =>
//       `<li><img  src="${url}" alt="${alt}" width = 500 height = auto /></li>`
//   )
//   .join('');
// console.log(itemGallery);
// gallery.insertAdjacentHTML('beforeend', itemGallery);
