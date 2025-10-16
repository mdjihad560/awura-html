"use strict";

(function ($) {
  "use strict";

  /*--------------------------------------------------------------
  [Table of contents]
    
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
    AWURA DYNAMIC JS INIT
    --------------------------------------------------------------*/
    document.getElementById("year").textContent = new Date().getFullYear();

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
  });

  /*--------------------------------------------------------------
  AWURA MAGNIFIC POPUP JS INIT
  ------------------------------------------------------------*/
  var popup_youtube = $(".video-init");
  if (popup_youtube.is_exist()) {
    popup_youtube.magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade"
    });
  }

  /*--------------------------------------------------------------
  AWURA V2 HERO THUMB JS INIT
  ------------------------------------------------------------*/
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".awura-hero-v2-thumb1", {
    y: -1200,
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

  /*--------------------------------------------------------------
  AWURA V2 PORTFOLIO SCROLL JS INIT
  ------------------------------------------------------------*/

  var sections = document.querySelectorAll(".awura-portfolio-wrap2");
  window.addEventListener("scroll", function () {
    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });

  // // video
  // // Elements

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

  /*--------------------------------------------------------------
  AWURA WOW JS INIT
  --------------------------------------------------------------*/
  new WOW().init();
})(jQuery);