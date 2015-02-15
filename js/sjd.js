/*==================================
---------- SCROLL WATCHER ----------
==================================*/
$(window).scroll(function() {
  // Get current window position
  height = $(window).scrollTop()
  //console.log(height)

  // add small class
  if (height > 110) {
    $('nav').addClass('scrolled-nav')
  } else if (height == 0) {
    // Removes any hashes when top or window is reached.
    window.location.hash = ""
  } else {
    $('nav').removeClass('scrolled-nav')
  }
});

/*=================================
------ WATCH FOR MODAL LINKS ------
=================================*/
// Loads the correct modal based on hash links
$(document).ready(function() {
  if (window.location.hash != "") {
    windowhash = window.location.hash.toLowerCase();
    if ($(windowhash).hasClass('modal')) {
      $(windowhash).modal('show');
    }
  }
});

// Changes url.hash to be #modalId-x when a modal is opened.
$(window).on('shown.bs.modal', function(){
    currentModal = $('.in');
    window.location.hash = currentModal.attr('id');
});

$(window).on('hide.bs.modal', function(){
    window.location.hash = "#/";
});

/*=================================
-------- SMOOTH SCROLL NAV --------
=================================*/
// NAV LINKS
$(function() {
  $('.navbar-right a[href*=#]:not([href=#])').click(function() {
    $('.navbar-toggle:visible').click();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 59 // $small-nav-height -1
        }, 400);
        return false;
      }
    }
  });
});

// LOGO LINK
$(function() {
  $('.navbar-header a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 200
        }, 400);
        return false;
      }
    }
  });
});


/*=================================
---------- FORM VALIDATOR ---------
=================================*/
function validateForm() {
  var name = document.getElementById("form-name").value
  var email = document.getElementById("form-email").value
  var phoneNo = document.getElementById("form-number").value
  var message = document.getElementById("form-message").value

  // Check name
  if (name == null || name == "") {
    alert("Error: Name must be provided.")
    return false;
  } else if (name.length < 2) {
    alert("Error: Name must be at least 2 characters long.")
    return false;
  }

  // Check email
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (email == null || email.length < 1) {
      alert("Error: Email address must be provided.");
      return false;
  } else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
      alert("Error: Not a valid e-mail address");
      return false;
  }

  // Check message
  if (message == null || message.length < 1) {
    alert("Error: Must contain a message.");
    return false;
  } else if (message.length < 10) {
    alert("Error: Message is not long enough. Please elaborate.");
    return false;
  }
}

/*=================================
-------- LIVE FORM CHECKERS -------
=================================*/
// CHECK NAME
$('#form-name').on("input", function() {
  value = this.value
  //console.log(this.value)
  if (value.length == 0) {
    $('#form-name').removeClass("invalid");
    $('#form-name').removeClass("valid");
  } else if (value.length < 2) {
    $('#form-name').removeClass("valid");
    $('#form-name').addClass("invalid");
  }else {
    $('#form-name').removeClass("invalid");
    $('#form-name').addClass("valid");
  }
});
// CHECK EMAIL
$("#form-email").on("input", null, null, function() {
  value = this.value;

  var atpos = value.indexOf("@");
  var dotpos = value.lastIndexOf(".");

  if (value.length == 0) {
    $('#form-email').removeClass("invalid");
    $('#form-email').removeClass("valid");
  } else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=value.length) {
    $('#form-email').removeClass("valid");
    $('#form-email').addClass("invalid");
  }else {
    $('#form-email').removeClass("invalid");
    $('#form-email').addClass("valid");
  }  
});
// CHECK NUMBER
$("#form-number").on("input", null, null, function() {
  value = this.value;

  if (value.length == 0) {
    $('#form-number').removeClass("invalid");
    $('#form-number').removeClass("valid");
  } else if (value.length < 8) {
    $('#form-number').removeClass("valid");
    $('#form-number').addClass("invalid");
  }else {
    $('#form-number').removeClass("invalid");
    $('#form-number').addClass("valid");
  }  
});
// CHECK MESSAGE
$("#form-message").on("input", null, null, function() {
  value = this.value;

  if (value.length == 0) {
    $('#form-message').removeClass("invalid");
    $('#form-message').removeClass("valid");
  } else if (value.length < 10) {
    $('#form-message').removeClass("valid");
    $('#form-message').addClass("invalid");
  }else {
    $('#form-message').removeClass("invalid");
    $('#form-message').addClass("valid");
  }  
});