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

// Slider (Raisa)
 var slideIndex = 0;
 showSlides();

 function showSlides() { 
   var i;
   var img = ['img/hugo-boss-black-ss-2012-mark-vanderloo-3.jpg',
              'img/120913_Boga_1801_2.jpg',
              'img/pexels-burst-374044.jpg',
              'img/pexels-david-bartus-297933.jpg',
              'img/pexels-artem-beliaikin-994517.jpg'];

   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   var home = document.getElementById("home-id");

   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }


  //slider opacity animation
  $(".home").animate({opacity: '.6'},1);
  $(".home").animate({opacity: '.95'},1000);
  
   slideIndex++;

   if (slideIndex > slides.length) {
     slideIndex = 1
   }   

   imgs = img.shift();
   img.push(imgs);

   home.style.backgroundImage='url(' + img[slideIndex-1] + ')';
   home.style.backgroundSize="cover";
   

   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
   setTimeout(showSlides, 3000);
 }
