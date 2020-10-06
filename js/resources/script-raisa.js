
//Sidebar-fullscreen
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
  

//Slider
  
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var img = ['../img/latest-autumn-fashion-trends-for-women-wallpaper-preview.jpg','../img/mens-fashion-trends-2020.jpg',
                '../img/people-man-travel-fashion.jpg','../img/mens-fashion-trends-2020.jpg',
                '../img/hugo-boss-black-ss-2012-mark-vanderloo-3.jpg'];
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var home = document.getElementById("home-id");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    imgs = img.shift();
    img.push(imgs);
    home.style.backgroundImage='url(' + img[slideIndex-1] + ')';
    
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
  }