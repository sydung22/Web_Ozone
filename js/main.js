$( document ).ready(function() {

$('.slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
   dots: true,
   arrows: false,
   autoplaySpeed: 4000,
   speed: 1500,
});

  $('.btn-bar').click(function(){
    $('.ozone-nav ul').toggleClass('show');
  })
  
});

