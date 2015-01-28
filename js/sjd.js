// Highlight nav links on scrollTop
/*
$('body').scrollspy({ 
    target: '.navbar-fixed-top'
    offset: 500
});
*/

// Smooth Scrolling Navigation
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 400);
        return false;
      }
    }
  });
});