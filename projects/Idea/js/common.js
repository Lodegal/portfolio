(function ($) {

'use strict';

$(document).ready(function() {

  // FullPage
	$('#fullpage').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		navigation: true,
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
    responsiveWidth: 991,
    paddingTop: '50px',
    paddingBottom: '50px'
  });

  // ColorSwap
  setInterval(function() {
    if($('body').hasClass('fp-viewing-secondPage')){
      $('#fp-nav ul li a span, .fp-slidesNav ul li a span, .menu-toggle span').addClass('-bgcswap');
      $('.logo, .menu-toggle').addClass('-colorswap');
    }else{
      $('#fp-nav ul li a span, .fp-slidesNav ul li a span, .menu-toggle span').removeClass('-bgcswap');
      $('.logo').removeClass('-colorswap');
    };
  }, 100);

  // FullPage Scroll false
  setInterval(function() {
    if($('.menu-toggle').hasClass('open')){
      fullpage_api.setAllowScrolling(false);
      fullpage_api.setKeyboardScrolling(false);
    }else{
      fullpage_api.setAllowScrolling(true);
      fullpage_api.setKeyboardScrolling(true);
    };
  }, 100);

 // Menu-toggle
  $(".menu-toggle").on('click', function() {
    $(".menu-toggle, .navigation, .menu, .logo").toggleClass("open");
    $(".overlay").toggleClass('-overlay-on');
    $("body, html").toggleClass('-overflow');
  });
  
  $(".menu-item a, .-overlay-4, .-overlay-1, .-overlay-3 a, .logo").on('click', function() {
    $(".menu-toggle, .navigation, .menu, .logo").removeClass("open");
    $(".overlay").removeClass('-overlay-on');
    $("body").removeClass('-overflow');
  });
  
  // Resize 
  $(window).resize(function() {
    if ( $(window).width() < 992 ) {
      $(".header").autoHidingNavbar()
    }
  });

  //Navigation Hover 
  $( ".link-1, .-home" ).hover(
    function() {
      $( '.-home' ).addClass( "hover" );
    }, function() {
      $( '.-home' ).removeClass( "hover" );
    }
  );

  $( ".link-2, .-about" ).hover(
    function() {
      $( '.-about' ).addClass( "hover" );
    }, function() {
      $( '.-about' ).removeClass( "hover" );
    }
  );

  $( ".link-3, .-application" ).hover(
    function() {
      $( '.-application' ).addClass( "hover" );
    }, function() {
      $( '.-application' ).removeClass( "hover" );
    }
  );

  $( ".link-4, .-services" ).hover(
    function() {
      $( '.-services' ).addClass( "hover" );
    }, function() {
      $( '.-services' ).removeClass( "hover" );
    }
  );

  $( ".link-5, .-contacts" ).hover(
    function() {
      $( '.-contacts' ).addClass( "hover" );
    }, function() {
      $( '.-contacts' ).removeClass( "hover" );
    }
  );
});

}(jQuery));