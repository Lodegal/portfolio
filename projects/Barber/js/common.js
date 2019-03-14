(function ($) {

'use strict';


$(document).ready(function() {

  // Hide half 0f header
  var st = $(this).scrollTop();
  if (st > 0){
    $('.js-header').addClass('-hide');
  } else {
    $('.js-header').removeClass('-hide');
  }
	
	$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > 0){
      $('.js-header').addClass('-hide');
    } else {
      $('.js-header').removeClass('-hide');
    }
	});
	// Hide half 0f header END

  // Slick
  // Main slider
  $('.js-main-slider').slick({
    arrows: false,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false
  });
  // Main slider END

  // Second slider
  $('.js-second-slider').slick({
    infinite: true,
    speed: 700,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    prevArrow: '<button id="second-slick-prev" type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button id="second-slick-next" type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
  // Second slider END
	// Slick END

  // MatchHeight
  $('.about-form').matchHeight();
  // MatchHeight END
  
  // SlickLightbox
  $('.js-gallery').slickLightbox();
  // SlickLightbox END

  // Select2
  $(".js-select").select2({
    width: '100%',
    placeholder: '',
    minimumResultsForSearch: Infinity,
  });

  $(".js-second-select").select2({
    width: '100%',
    placeholder: '',
    minimumResultsForSearch: Infinity,
  });
  // Select2 END 

  //Datepicker 
  $('#datepicker').datepicker({
    timepicker: true
  });
  //Datepicker END

  // COUNT UP
  function countUpNumbers(target, duration) {
    target.each(function() {
      if (!target[0].countUpInit) {
        target[0].countUpInit = true;

        var options = {
          useEasing: true,
          separator : '',
          decimal: '.',
          suffix: ''
        };

        var countNumber = $(this).attr('data-count-number'),
            numbersAfterComma;

        // find amount of numbers after the decimal point
        if (countNumber.indexOf('.') > 0) {
          numbersAfterComma = countNumber.length - (countNumber.indexOf('.') + 1);
        } else {
          numbersAfterComma = 0;
        }

        var countUpElement = $(this).get(0),
            numAnim = new CountUp(countUpElement, 0, countNumber, numbersAfterComma, duration/1000, options);

        numAnim.start();
      }
    });
  }

  if ($('.js-count-up-item').length) {
    $('.js-count-up-item').waypoint({
      handler: function() {
        countUpNumbers($(this.element), 4000);
      },
      offset: '80%'
    })
  }
  // COUNT UP END


  // Animate menu
  $(".js-navbar").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // Animate menu END

  // Scroll-down
  $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#appointment').offset().top }, 'slow');
      return false;
  });
  // Scroll-down END

  // Mobile-navigation
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('body').toggleClass("overflow");
    $('.overlay').toggleClass("overlay-active");
    $(".mobile-navigation").toggleClass('mobile-navigation-active');
  });

  $(".mobile-menu").on("click","a", function (event) {
    $(".mobile-navigation").removeClass('mobile-navigation-active');
    $('.menu-toggle').removeClass("on");
    $('body').removeClass("overflow");
    $('.overlay').removeClass("overlay-active");
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
   });

  $(".overlay").on('click', function() {
    $(".mobile-navigation").removeClass('mobile-navigation-active');
    $('.menu-toggle').removeClass("on");
    $('body').removeClass("overflow");
    $('.overlay').removeClass("overlay-active");
  });
  // Mobile-navigation END
});

}(jQuery));

