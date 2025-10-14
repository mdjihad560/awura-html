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
    AWURA STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $("#sticky-menu").addClass("sticky-menu");
      } else {
        $("#sticky-menu").removeClass("sticky-menu");
      }
    });

    /*--------------------------------------------------------------
    AWURA SHAPE ANIMATION JS INIT
    --------------------------------------------------------------*/
    var images = document.querySelectorAll(".awura-cta-shape-left, .awura-cta-shape-right, .awura-hero-shape-left, .awura-hero-shape-right");
    function revealOnScroll() {
      var triggerBottom = window.innerHeight * 0.9; // trigger before fully in view

      images.forEach(function (img) {
        var imgTop = img.getBoundingClientRect().top;
        if (imgTop < triggerBottom) {
          img.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll); // trigger on load
  }); /*End document ready*/

  /*--------------------------------------------------------------
  AXIMO MAGNIFIC POPUP JS INIT
  ------------------------------------------------------------*/
  var popup_youtube = $('.video-init');
  if (popup_youtube.is_exist()) {
    popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
    });
  }

  // scroll
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".awura-hero-v2-thumb1", {
    y: -1600,
    scrollTrigger: {
      trigger: ".awura-hero-section2",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  gsap.to(".awura-hero-v2-thumb2", {
    y: -700,
    scrollTrigger: {
      trigger: ".awura-hero-section2",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
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

  new WOW().init();
})(jQuery);