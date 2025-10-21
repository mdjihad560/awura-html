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

  /*--------------------------------------------------------------
  AWURA BUTTON HOVER JS INIT
  ------------------------------------------------------------*/

  $(".awura-btn-style-three").mouseenter(function (e) {
    var parentOffset = $(this).offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".awura-button-hover").css({
      left: relX,
      top: relY
    });
    $(this).prev(".awura-button-hover").removeClass("btn-desplode-circle");
    $(this).prev(".awura-button-hover").addClass("btn-explode-circle");
  });
  $(".awura-btn-style-three").mouseleave(function (e) {
    var parentOffset = $(this).offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".awura-button-hover").css({
      left: relX,
      top: relY
    });
    $(this).prev(".awura-button-hover").removeClass("btn-explode-circle");
    $(this).prev(".awura-button-hover").addClass("btn-desplode-circle");
  });

  /*--------------------------------------------------------------
  AWURA ACCORDION JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var accordionGroups = document.querySelectorAll(".awura-accordion-wrapper");
    accordionGroups.forEach(function (group) {
      var items = group.querySelectorAll(".awura-accordion-item");
      items.forEach(function (item) {
        var header = item.querySelector(".awura-accordion-header");
        var content = item.querySelector(".awura-accordion-content");

        // যদি active থাকে, height সেট করো
        if (item.classList.contains("active")) {
          content.style.height = content.scrollHeight + "px";
        }
        header.addEventListener("click", function () {
          var openItem = group.querySelector(".awura-accordion-item.active");
          if (openItem && openItem !== item) {
            openItem.classList.remove("active");
            openItem.querySelector(".awura-accordion-content").style.height = "0px";
          }
          item.classList.toggle("active");
          if (item.classList.contains("active")) {
            content.style.height = content.scrollHeight + "px";
          } else {
            content.style.height = "0px";
          }
        });
      });
    });
  });

  /*--------------------------------------------------------------
  AWURA PROGRESS JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var chartSection = document.getElementById("chart");
    var bars = document.querySelectorAll(".awura-progress-bar");

    // ✅ Stop if chart or bars are not found (prevents errors)
    if (!chartSection || bars.length === 0) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          bars.forEach(function (bar) {
            var height = bar.getAttribute("data-height");
            bar.style.height = height;
          });

          // Unobserve so it animates only once
          observer.unobserve(chartSection);
        }
      });
    }, {
      threshold: 0.5
    });
    observer.observe(chartSection);
  });

  /*--------------------------------------------------------------
  TESTIMONIAL PROGRESS JS INIT
  ------------------------------------------------------------*/
  var testimonial_slider = $(".awura-testimonial-init");
  if (testimonial_slider.is_exist()) {
    testimonial_slider.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: false,
      speed: 800,
      prevArrow: '<button class="slide-arrow awura-testimonial-next"><i class="ri-arrow-left-line"></i></button>',
      nextArrow: '<button class="slide-arrow awura-testimonial-prev"><i class="ri-arrow-right-line"></i></button>',
      responsive: [{
        breakpoint: 1399,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }

  /*--------------------------------------------------------------
  PRICING JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById("toggle");
    var prices = document.querySelectorAll(".awura-pricing-price");

    // ✅ Stop here if toggle or prices not found
    if (!toggle || prices.length === 0) return;
    var isYearly = false;
    toggle.addEventListener("click", function () {
      isYearly = !isYearly;
      toggle.classList.toggle("active");
      prices.forEach(function (price) {
        var monthly = price.getAttribute("data-monthly");
        var yearly = price.getAttribute("data-yearly");
        var newPrice = isYearly ? yearly : monthly;
        var duration = isYearly ? "/year" : "/month";
        price.style.opacity = "0";
        setTimeout(function () {
          price.innerHTML = "$".concat(newPrice, "<span>").concat(duration, "</span>");
          price.style.opacity = "1";
        }, 250);
      });
    });
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

  /*--------------------------------------------------------------
  AWURA WOW JS INIT
  --------------------------------------------------------------*/
  new WOW().init();
})(jQuery);