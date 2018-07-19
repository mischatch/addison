document.addEventListener('DOMContentLoaded', () => {

  $('.button').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('modal__active');
    $('body').toggleClass('body__active');
  });

  $('.modal__close-button').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('modal__active');
    $('body').toggleClass('body__active');
  });

  // if($('#modal').hasClass('modal modal__active')){
  //
  // }
});
