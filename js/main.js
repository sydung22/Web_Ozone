$( document ).ready(function() {

$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
   dots: true,
   arrows: false,
   autoplaySpeed: 3500,
   speed: 1500,
});

  $('.btn-bar').click(function(){
    $('.ozone-nav ul').toggleClass('show');
  })
  
});

