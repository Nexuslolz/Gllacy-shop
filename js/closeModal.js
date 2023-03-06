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
