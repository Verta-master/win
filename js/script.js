//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--close');
  $('.header .menu__list').slideToggle();
  $('.header').toggleClass('header--menu');
});

if (window.innerWidth < 1022) {
  $('.content .title').click(function() {
    $('.content__list').slideToggle();
    $(this).toggleClass('title--top');
  })
}

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $('.header').addClass('header--scroll');
  } else {
    $('.header').removeClass('header--scroll');
  };
});

