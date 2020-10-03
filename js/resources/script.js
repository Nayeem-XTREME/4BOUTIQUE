// $(document).ready(function() {
//     // Sticky Nav
//     $('.js--content').waypoint(function(direction) {
//         if (direction == "down") {
//             $('.header').addClass('sticky');
//         } else {
//             $('.header').removeClass('sticky');
//         }
//     }, {
//         offset: '60px'
//     });
// })

// $(document).ready(function() {
//     $('.js--content').click(function(){
//         $('.header').addClass('sticky');
//     });
// })

// $('#container').fullpage();

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 650) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });
});