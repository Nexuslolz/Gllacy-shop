const openFeedback = document.querySelector(".modal-feedback");
const linkFeedback = document.querySelector("#modal-feedback");
const closeFeedback = document.querySelector(".btn-close-feedback");
const formFeedback = document.querySelector('.feedback-form');
const nameFeedback = openFeedback.querySelector('[name=ФИО]');
const emailFeedback = openFeedback.querySelector('[name=эмейл]');
const messageFeedback = openFeedback.querySelector('[name=комментарий');


linkFeedback.addEventListener('click', function (evt) {
  evt.preventDefault()
  openFeedback.classList.add("modal-feedback-show")
});
closeFeedback.addEventListener('click', function () {
  openFeedback.classList.remove("modal-feedback-show")
  openFeedback.classList.remove("modal-error")
});

formFeedback.addEventListener('submit', function (evt) {
  if (!nameFeedback.value || !emailFeedback.value) {
    evt.preventDefault()
    console.log('Представьтесь, пожалуйста')
    openFeedback.classList.add("modal-error")
  } else if (!messageFeedback.value) {
    evt.preventDefault()
    console.log('Введите ваше сообщение')
    openFeedback.classList.add("modal-error")
  } else {
    console.log(nameFeedback.value && emailFeedback.value && messageFeedback.value)
  }
})
