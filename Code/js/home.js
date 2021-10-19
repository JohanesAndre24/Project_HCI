const processSlider = () => {
  const firstSlide = $('.slider .slider1');
  const activeSlide = $('.slider .active');

  activeSlide.removeClass('active');

  if (activeSlide.next().length) {
    activeSlide.next().addClass('active');
  } else {
    firstSlide.addClass('active');
  }
}

const initSlider = () => {
  setInterval(processSlider, 1500)
}

$(document).ready(function () {
  initSlider();
});
