const openLogin = document.querySelector(".modal-login")
const linkLogin = document.querySelector(".header-link-inter");
const closeLogin = document.querySelector(".btn-close-login");
const login = openLogin.querySelector("[name=Логин]");
const formLogin = openLogin.querySelector('form');
const password = openLogin.querySelector('[name=Пароль]')
const storage = localStorage.getItem('login');
let isStorageSupport = true



linkLogin.addEventListener('click', function (evt) {
  evt.preventDefault()
  openLogin.classList.add("modal-login-show")
  if (storage) {
    login.value = storage
    password.focus();
  } else {
    login.focus()
  }
});
closeLogin.addEventListener('click', function () {
  openLogin.classList.remove("modal-login-show")
  openLogin.classList.remove("modal-error")
});

formLogin.addEventListener('submit', function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault()
    alert('Нужно ввести логин и пароль')
    openLogin.classList.add("modal-error")
  } else {
    localStorage.setItem('login', login.value)
    try {
      storage = localStorage.getItem('login');
    } catch (err) {
      isStorageSupport = false;
    }
    console.log(login.value);
    console.log(password.value);
  }
})
