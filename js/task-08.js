const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', userRegister);
function userRegister(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
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

console.dir(registerForm);
