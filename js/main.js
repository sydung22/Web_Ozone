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

const menuBtn = document.querySelector('.btn-bar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {

  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  }else{
    menuBtn.classList.remove('open');
    menuOpen = false;
  }

});

window.addEventListener('scroll', function(){
  let pageTop = document.querySelector('#btnScrolltoTop');
  let windowPosition = window.scrollY > 80;
  pageTop.classList.toggle('active', windowPosition);
})

const btnScrolltoTop = document.querySelector('#btnScrolltoTop');
btnScrolltoTop.addEventListener('click', function(){
  $('html, body').animate({scrollTop: 0}, 'slow');
});

