// Scroll watcher
$(window).scroll(function() {
  // Get current window position
  height = $(window).scrollTop()
  //console.log(height)

  // add small class
  if (height > 100) {
    $('nav').addClass('scrolledNav')
  } else {
    $('nav').removeClass('scrolledNav')
  }
});

// Smooth Scrolling Navigation
$(function() {
  $('.navbar-fixed-top a[href*=#]:not([href=#])').click(function() {
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

// Close responsive menu on click 
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});