var breakpoint = window.matchMedia('(max-width: 766px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.comments__slider', {
    navigation: {
      nextEl: '.comments__next',
      prevEl: '.comments__prev',
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      1022: {
        slidesPerView: 2,
      }
    }
  });
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
