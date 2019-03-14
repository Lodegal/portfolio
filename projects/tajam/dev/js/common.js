(function ($) {

'use strict';

$(document).ready(function() {
	
	// slick
	$('.js-slider-wrapper').slick({
		arrows: false,
		dots: true
	});
	
	$('.js-projects-wrapper').slickLightbox();

	// main button
	$('.js-btn').click (function() {
		var id = $(this).attr('href');
    $('html, body').animate({scrollTop: $(id).offset().top }, 'slow');
  });

	// modal window
  $('.play-button').click(function () {
		var src = 'https://www.youtube.com/embed/hlWiI4xVXKY';
		$('.responsive-video iframe').attr('src', src);
  });

  $('.modal-footer button, .modal, .modal-title button').click(function () {
      $('.responsive-video iframe').removeAttr('src');
  });

	// munu-icon
	$('.js-toggle-menu').click(function(){
  	$('.js-toggle-menu, .js-mobile-menu, .overlay').toggleClass('-open');
  	$('body').toggleClass('-overflow');
  });

	// hover
	$('.play-button').hover(function(){
		$('.play-button-text').toggleClass('-hover')
	})
	$('.overlay, .logo').click(function(){
		$('.js-toggle-menu, .js-mobile-menu, .overlay').removeClass('-open');
		$('body').removeClass('-overflow');
	})
	// link animate
	$(".js-navbar").on("click","a", function (event) {
		$('.js-toggle-menu, .js-mobile-menu, .overlay').removeClass('-open');
		$('body').removeClass('-overflow');
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  
  // small header
 	var distanceY = 1;
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > distanceY) {
			$('.js-header').addClass('-small-header');
		} else {
			$('.js-header').removeClass('-small-header');
		}
	})

	if ($(document).scrollTop() > distanceY) {
		$('.js-header').addClass('-small-header');
	}

	// reviews
	$('.js-reviews').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.js-reviews-navigation'
	});
	$('.js-reviews-navigation').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.js-reviews',
	  dots: false,
	  centerMode: true,
	  centerPadding: '0px',
	  focusOnSelect: true,
	  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
	});
});

}(jQuery));