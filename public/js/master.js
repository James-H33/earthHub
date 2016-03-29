$(document).ready(function(){

  var button = $('#nav-icon');

  button.click(function( event ) {
    $('.nav-container').toggleClass('active-menu');
    $(this).toggleClass('open');

    event.stopPropagation();
    event.preventDefault();
  });



});
