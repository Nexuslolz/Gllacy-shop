window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (openSearch.classList.contains("modal-search-show")) {
      evt.preventDefault()
      openSearch.classList.remove("modal-search-show")
      openSearch.classList.remove("modal-error")
    }
    if (openLogin.classList.contains("modal-login-show")) {
      evt.preventDefault()
      openLogin.classList.remove("modal-login-show")
      openLogin.classList.remove("modal-error")
    }
    if (openFeedback.classList.contains("modal-feedback-show")) {
      evt.preventDefault()
      openFeedback.classList.remove("modal-feedback-show")
      openFeedback.classList.remove("modal-error")
    }
  }
  })







const openSearch = document.querySelector(".modal-search");
const linkSearch = document.querySelector(".header-link-search");
const closeSearch = document.querySelector(".btn-close-search");
const search = openSearch.querySelector('[name=Поиск]');
const formSearch = openSearch.querySelector('form');


linkSearch.addEventListener('click', function (evt) {
evt.preventDefault()
openSearch.classList.add("modal-search-show")
openSearch.classList.remove("modal-error")
search.focus()
});
closeSearch.addEventListener('click', function () {
  openSearch.classList.remove("modal-search-show")
  openSearch.classList.remove("modal-error")
});

formSearch.addEventListener('submit', function(evt) {
  evt.preventDefault()

  if (!search.value) {
    openSearch.classList.remove("modal-error")
    evt.preventDefault()
    console.log('Введите, что хотите найти')
    openSearch.classList.add("modal-error")
  } else {
    console.log(search.value)
  }
})







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
if(storage){
  login.value = storage
  password.focus();
  }else{
    login.focus()
     }
});
closeLogin.addEventListener('click', function () {
  openLogin.classList.remove("modal-login-show")
  openLogin.classList.remove("modal-error")
});

formLogin.addEventListener('submit', function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault()
   console.log('Нужно ввести логин и пароль')
    openLogin.classList.add("modal-error")
  }else{
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







const formFollow = document.querySelector('.form-follow')
const infoFollow = formFollow.querySelector('[name=эмейл]')


formFollow.addEventListener('submit', function (evt){
  if (!infoFollow.value) {
    evt.preventDefault()
    console.log ('Введите email')
  }else{
console.log(infoFollow.value)
  }
})







const openFeedback = document.querySelector(".modal-feedback");
const linkFeedback = document.querySelector("#modal-feedback");
const closeFeedback = document.querySelector(".btn-close-feedback");
const formFeedback = document.querySelector('.feedback-form');
const nameFeedback = openFeedback.querySelector('[name=ФИО]');
const emailFeedback = openFeedback.querySelector('[name=эмейл]');
const messageFeedback = openFeedback.querySelector('[name=комментарий');


linkFeedback.addEventListener('click', function(evt) {
  evt.preventDefault()
openFeedback.classList.add("modal-feedback-show")
});
closeFeedback.addEventListener('click', function () {
  openFeedback.classList.remove("modal-feedback-show")
  openFeedback.classList.remove("modal-error")
});

formFeedback.addEventListener('submit', function(evt) {
  if(!nameFeedback.value || !emailFeedback.value) {
    evt.preventDefault()
    console.log('Представьтесь, пожалуйста')
    openFeedback.classList.add("modal-error")
  } else if (!messageFeedback.value) {
    evt.preventDefault()
   console.log('Введите ваше сообщение')
    openFeedback.classList.add("modal-error")
  }  else {
    console.log(nameFeedback.value && emailFeedback.value && messageFeedback.value)
  }
})




















