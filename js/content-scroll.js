//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.content__list li a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 100
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.content__list li a').each(function () {
      event.preventDefault();
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
//      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//          $('.menu__link').removeClass("menu__link--active");
//          currLink.addClass("menu__link--active");
//      }
  });
};