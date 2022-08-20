const view = document.querySelectorAll('.slide');
const pageBody = document.querySelector('.page-body')
const btnSliders = document.querySelectorAll('.btn-slider')
let i = 0;
let slider = function () {
  if (view[i].classList.contains('slide-current')) {
    view[i].classList.remove('slide-current')
    i++;
    if (i > 2) {
      i = 0
    }
    view[i].classList.add('slide-current')
  }

  if (view[0].classList.contains('slide-current')) {
    pageBody.style.backgroundColor = "#849d8f";
    btnSliders[2].classList.remove('btn-slider-active')
    btnSliders[0].classList.add('btn-slider-active')
  } else if (view[1].classList.contains('slide-current')) {
    pageBody.style.backgroundColor = "#8996a6";
    btnSliders[0].classList.remove('btn-slider-active')
    btnSliders[1].classList.add('btn-slider-active')
  } else if (view[2].classList.contains('slide-current')) {
    pageBody.style.backgroundColor = "#9d8b84"
    btnSliders[1].classList.remove('btn-slider-active')
    btnSliders[2].classList.add('btn-slider-active')
  }
}

setInterval(slider, 4000)
