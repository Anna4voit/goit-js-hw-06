const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputEl.addEventListener('input', event => {
  spanText.style.fontSize = event.currentTarget.value + 'px';
});
