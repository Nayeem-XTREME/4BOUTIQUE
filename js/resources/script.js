$(document).ready(function() {

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }

  });


  // Sticky Navbar
  $(window).scroll(function() {
    if ($(document).scrollTop() > 650) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
  
});

// Fullscreen Sidebar (Raisa)
$(function() {
  $('#ham').on('click', function() {
    $('#ham-nav').removeClass('cross-screen');
    $('#ham-nav').toggleClass('visible');
  });

  $('#ham-black').on('click', function() {
    $('#ham-nav').removeClass('cross-screen');
    $('#ham-nav').toggleClass('visible');
  });

  $('#ham-cross').on('click', function() {
    $('#ham-nav').removeClass('visible');    
    $('#ham-nav').toggleClass('cross-screen');
  });
});