(function ($) {

'use strict';

$(document).ready(function() {

  // AutoHidingNavbar
  $(".header").autoHidingNavbar()
  // AutoHidingNavbar END

  // Menu-toggle
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("open");
    $('body').toggleClass("overflow");
    $(".mobile-navigation").toggleClass('mobile-navigation-active');
    $(".navigation-overlay").toggleClass('navigation-overlay-active');
  });
   // Menu-toggle END

  // ANIMATE MENU
  $(".js-navbar").on("click","a", function (event) {
    $(".mobile-navigation").removeClass('mobile-navigation-active');
    $('.menu-toggle').removeClass("open");
    $('body').removeClass("overflow");
    $('.navigation-overlay').removeClass("navigation-overlay-active");
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // ANIMATE MENU

  // SCROLL DOWN
  $('.js-up-arrow, .logo').click (function() {
      $('html, body').animate({scrollTop: $('#home').offset().top }, 'slow');
      return false;
  });
  // SCROLL DOWN END

  // HOME SLICK
	$('.js-home-slider').slick({
		arrows: false,
		dots: false,
		infinite: true,
  	speed: 800,
  	fade: true,
  	cssEase: 'linear',
  	autoplay: true,
  	autoplaySpeed: 5000
	});
  // HOME SLICK END

  // SLICK
  $('.js-clients-slider, .js-pricing-plans-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 400,
  });
  // SLICK END

  // MATCHHEIGHT
  $('.page-title').matchHeight();
  // MATCHHEIGHT END

  // NAVIGARION-OVERLAY
  $(".navigation-overlay").on('click', function() {
     $(".mobile-navigation").removeClass('mobile-navigation-active');
    $('.menu-toggle').removeClass("open");
    $('body').removeClass("overflow");
    $('.navigation-overlay').removeClass("navigation-overlay-active");
  });
  // NAVIGARION-OVERLAY END

  // OVERLAY
  $(".overlay").on('click', function() {
    $('.phone-call-window').removeClass("on");
    $('body').removeClass("overflow");
    $('.overlay').removeClass("overlay-active");
    $('.header').removeClass("header-on");
    $('.phone-call').removeClass("phone-call-on");
  });
  // OVERLAY END

  // SHUFFLE FILTER
  function filterInit(filterContainer) {

    if (filterContainer.length) {
      var filterMainContainer = filterContainer,
          filterContent = filterMainContainer.find('.filter-content'),
          filterNav = filterMainContainer.find('.filter-nav'),
          filterCategoryName = '',
          shuffle = window.shuffle;

      var myShuffle = new Shuffle(filterContent, {
        speed: 400,
        easing: 'ease',
      });

      myShuffle.update();

      // filtering by click
      filterNav.find('a').on('click', function() {

        filterNav.find('a').removeClass('-active');
        $(this).addClass('-active');
        filterCategoryName = $(this).attr('data-group');

        myShuffle.filter(filterCategoryName, shuffle);

        myShuffle.update();

      });
    }
  }

  filterInit($('.js-filter-container'));
  // SHUFFLE FILTER END
});

}(jQuery));