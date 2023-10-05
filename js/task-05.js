const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
// console.log(input);
// console.log(output);
input.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    output.textContent = 'Anonymous';
  }
});
