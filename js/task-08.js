const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', userRegister);
function userRegister(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === '' || password === '') {
    return alert('Будь ласка заповнить усі поля!');
  } else {
    const userData = {
      email,
      password,
    };
    console.log(userData);
    form.reset();
  }
}
