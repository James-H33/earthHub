$(document).ready(function(){

  var button = $('#nav-icon');

  button.click(function( event ) {
    $('.nav-container').toggleClass('active-menu');
    $(this).toggleClass('open');

    event.stopPropagation();
    event.preventDefault();
  });

});


$(window).on('scroll', function() {

  var scrollCheck = $(this).scrollTop();

  $('.intro-display h1').css({
    'transform' : 'translateY(' + scrollCheck / 1.8 + '%)'
  });

  $('.intro-display p').css({
    'transform' : 'translateY(' + scrollCheck / .8 + '%)'
  });

});
