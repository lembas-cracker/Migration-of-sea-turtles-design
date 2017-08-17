$(document).ready(function() {
    $('.arrow-down').click (function() {
      $('html, body').animate({scrollTop: $('span.shadow').offset().top}, 'slow');
      return false;
    });
  });
