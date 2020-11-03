// Menu toggle
function customMenu(x) {
  var x = document.getElementById("header");
  x.classList.toggle("menu-toggle");
}
jQuery(document).ready(function($) {
  // Styicky Header
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 250) {
        $(".topnav").addClass("sticky");
    }
    else{
      $(".topnav").removeClass("sticky");
    }
  }); 

  $('.banner-slider').on('init', function(event, slick){
    $('.slick-slide').find('.animated').removeClass('go');        
    setTimeout(function(){
      $('.slick-active').find('.animated').addClass('go');        
    },100);
  });
  $('.banner-slider').not('.slick-initialized').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    //fade: true,
    //cssEase: 'linear'
  });
  $('.banner-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-slide').find('.animated').removeClass('go');        
    setTimeout(function(){
      $('.slick-active').find('.animated').addClass('go');        
    },100);
  });
});

// Portfolio slider
$('.portfolio-slide').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Testimonials
var $st = $('.pagination');
$(".testimonials").slick({
  dots: true,
  arrows: false,
  centerMode: true,
  slidesToShow: 3,
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// Scroll Bottom to top
const scrollToTopButton = document.getElementById('js-top');
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}
// AOS animation
// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: false
  });
}
$(window).on('load', function() {
  aos_init();
});

// Map
function initMap() {
  var center = {lat: 53.5821362, lng: -2.4277949};
  var locations = [
    ['<b>Manchester Office</b><br>\
    2 Bark St East, Bolton, BL1 2BQ<br>\
   <a href="https://www.google.com/maps/dir//Bark+St+E,+Bolton+BL1+2BQ/@53.5818293,-2.4302143,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x487ba655822baeaf:0x66eb8e8af3514a84!2m2!1d-2.4280433!2d53.5818596!3e0">Get Directions</a>',   53.5821362, -2.4277949],
    ['<b>London Office</b><br>\
    Unit 22, The Annexe, 98 Goldstone Villas, Hove, East Sussex, BN3 3RU, United Kingdom<br>\
   <a href="https://www.google.com/maps/place/London+EC1V+2NX/data=!4m2!3m1!1s0x48761ca66eeaa42d:0xfeaa9eff15ff6f43?sa=X&ved=2ahUKEwjS4bH19a_mAhXSnFwKHdbkC0YQ8gEwCnoECA4QBA">Get Directions</a>', 51.5273666,-0.0914433],
    ['<b>Scotland Office</b><br>\
    The Crichton, Bankend Road, Dumfries, DG1 4UQ<br>\
    <a href="https://www.google.com/maps/place/Dumfries+DG1+4UQ/data=!4m2!3m1!1s0x4862ca50e9ebec1d:0x7b0e9ac11bae24cb?sa=X&ved=2ahUKEwjSi9qK9q_mAhVDQUEAHdEnBzoQ8gEwCnoECAsQBA">Get Directions</a>', 55.0531084,-3.5970209]
  ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: center
      });
    var infowindow =  new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
          map: map,
          title: locations[count][0]
        });
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          }
        })(marker, count));
  }
}

// portfolio
$('.gallery ul li a').click(function() {
  var itemID = $(this).attr('href');
  $('.gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
  });
  $('.close').click(function() {
    $('.port, .gallery ul').removeClass('item_open');
    return false;
  });
  $(".gallery ul li a").click(function() {
    $('html, body').animate({
     scrollTop: parseInt($("#top").offset().top)
    }, 400);
});