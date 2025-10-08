"use strict";

(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  awura PRELOADER JS INIT
  awura STICKY MENU JS INIT
  awura HEADER SEARCH JS INIT
  awura MENU SIDEBAR JS INIT
  awura HERO SLIDER INIT
  awura HERO SLIDER2 INIT
  awura INSTAGRAM SLIDER INIT
  awura HERO THUMB SLIDER INIT
  awura GALLERY SLIDER INIT
  awura PROPERTIES SLIDER INIT
  awura PROPERTIES SLIDER2 INIT
  awura PROPERTIES SLIDER3 INIT
  awura TESTIMONIAL SLIDER INIT
  awura TESTIMONIAL SLIDER2 INIT
  awura TESTIMONIAL SLIDER3 INIT
  awura BRAND SLIDER INIT
  awura GALLERY SLIDER2 INIT
  awura COUNTER JS INIT
  awura MAGNIFIC POPUP VIDEO JS INIT
  awura MAGNIFIC POPUP IMAGE JS INIT
  awura PORTFOLIO MASONAY FILTER JS
  awura MAP JS
  awura WOW JS
   
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    awura PRELOADER JS INIT
    --------------------------------------------------------------*/
    $(".awura-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    awura STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {
    /*--------------------------------------------------------------
    AWURA PRELOADER JS INIT
    --------------------------------------------------------------*/
    var preloader = document.getElementById("awura-preloader");
    preloader.classList.add("fade-out");
    setTimeout(function () {
      preloader.style.display = "none";
      document.body.style.overflow = "auto";
    }, 600);
  }); // End window LODE

  new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 100,
    // distance from bottom of viewport before triggering
    mobile: true
  }).init();
})(jQuery);