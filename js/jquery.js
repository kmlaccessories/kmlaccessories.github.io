$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.welcome').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
});



$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
        $('.container_about_us_container').css({
        opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (elementHeight - scrollTop) / elementHeight;
        }
    });
});






$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.container_models').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (elementHeight - scrollTop) / elementHeight;
      }
    });
});



$(document).on('click', 'a[href^="#about_us_section"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



$(document).on('click', 'a[href^="#nuestras_piezas"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
}); 


