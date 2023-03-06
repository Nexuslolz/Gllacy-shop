const view = document.querySelectorAll('.slide');
const pageBody = document.querySelector('.page-body')
const btnSliders = document.querySelectorAll('.btn-slider')

const currentSlide = 'slide-current'
const btnSlide = 'btn-slider-active'

const firstColor = '#849d8f'
const secondColor = '#8996a6'
const thirdColor = '#9d8b84'

let i = 0;
let slider = function () {
  view.forEach((item) => {
    if (item.classList.contains(currentSlide)) {
      item.classList.remove(currentSlide)
    }
  })

  if (i >= 2) {
    i = 0
    view[i].classList.add(currentSlide)
  } else {
    i++;
    view[i].classList.add(currentSlide)
  }


  if (view[0].classList.contains(currentSlide)) {
    pageBody.style.backgroundColor = firstColor;
    btnSliders[2].classList.remove(btnSlide)
    btnSliders[0].classList.add(btnSlide)
  } else if (view[1].classList.contains(currentSlide)) {
    pageBody.style.backgroundColor = secondColor;
    btnSliders[0].classList.remove(btnSlide)
    btnSliders[1].classList.add(btnSlide)
  } else if (view[2].classList.contains(currentSlide)) {
    pageBody.style.backgroundColor = thirdColor
    btnSliders[1].classList.remove(btnSlide)
    btnSliders[2].classList.add(btnSlide)
  }
}

setInterval(slider, 4000)
