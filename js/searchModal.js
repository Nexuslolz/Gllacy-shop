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

formSearch.addEventListener('submit', function (evt) {
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

const formFollow = document.querySelector('.form-follow')
const infoFollow = formFollow.querySelector('[name=эмейл]')


formFollow.addEventListener('submit', function (evt) {
  if (!infoFollow.value) {
    evt.preventDefault()
    console.log('Введите email')
  } else {
    console.log(infoFollow.value)
  }
})
