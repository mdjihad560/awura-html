"use strict";

(function ($) {
  "use strict";

  /*--------------------------------------------------------------
  [Table of contents]
  AWURA DYNAMIC JS INIT
  AWURA STICKY MENU JS INIT
  AWURA SHAPE ANIMATION JS INIT
  AWURA MAGNIFIC POPUP JS INIT
  AWURA V2 HERO THUMB JS INIT
  AWURA V2 PORTFOLIO SCROLL JS INIT
  AWURA BUTTON HOVER JS INIT
  AWURA ACCORDION JS INIT
  TESTIMONIAL SLIDER JS INIT
  TESTIMONIAL SLIDER JS INIT 2
  TESTIMONIAL SLIDER JS INIT 3
  TESTIMONIAL SLIDER JS INIT 4
  PRICING JS INIT
  PRICING JS INIT 3
  DASHBOARD ROTATED JS INIT
  AWURA CHART V3 JS INIT
  CHART CHART V4 JS INIT
  CHART CHART CIRCLE V4 JS INIT
  PI CHART V5 JS INIT
  TAB V5 JS INIT
  AWURA V6 CONTENT THUMB JS INIT
  HIDE SHOW PASSWORD JS INIT
  THUMB HOVER JS INIT
  TEXT SCROLL OVERLAY JS INIT
  AWURA PRELOADER JS INIT
  AWURA THREE COLUMN FILTER JS
  AWURA WOW JS INIT
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };

  /* ============================================================
     DOCUMENT READY — using .on("ready") equivalent via $(function)
     All DOM-dependent code lives here
  ============================================================ */
  $(function () {
    /*--------------------------------------------------------------
    AWURA DYNAMIC JS INIT — active menu link highlight
    --------------------------------------------------------------*/
    var currentPage = location.pathname.split("/").pop();
    var menuLinks = document.querySelectorAll("nav.main-menu a, .awura-mobile-menu a");
    menuLinks.forEach(function (link) {
      var linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
        var parentLi = link.closest("li");
        if (parentLi) parentLi.classList.add("active");
        var parentDropdown = link.closest(".menu-item-has-children");
        if (parentDropdown) parentDropdown.classList.add("active");
      }
    });

    /*--------------------------------------------------------------
    AWURA DYNAMIC JS INIT — auto year
    --------------------------------------------------------------*/
    (function () {
      var el = document.getElementById("year");
      if (el) el.textContent = new Date().getFullYear();
    })();

    /*--------------------------------------------------------------
    AWURA STICKY MENU JS INIT
    FIX: replaced $(window).scroll() with $(window).on("scroll")
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
    FIX: replaced window.addEventListener inline with named handler;
         kept native addEventListener (GSAP/ScrollTrigger pattern,
         no jQuery equivalent needed here)
    --------------------------------------------------------------*/
    var shapeImages = document.querySelectorAll(".awura-cta-shape-left, .awura-cta-shape-right, .awura-hero-shape-left, .awura-hero-shape-right, .bottom-top-animation");
    function revealOnScroll() {
      var triggerBottom = window.innerHeight * 0.9;
      shapeImages.forEach(function (img) {
        if (img.getBoundingClientRect().top < triggerBottom) {
          img.classList.add("active");
        }
      });
    }
    $(window).on("scroll", revealOnScroll);
    $(window).on("load", revealOnScroll);

    /*--------------------------------------------------------------
    AWURA MAGNIFIC POPUP JS INIT
    --------------------------------------------------------------*/
    var popup_youtube = $(".video-init");
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade"
      });
    }

    /*--------------------------------------------------------------
    AWURA V2 HERO THUMB JS INIT (GSAP)
    --------------------------------------------------------------*/
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
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
    }

    /*--------------------------------------------------------------
    AWURA V2 PORTFOLIO SCROLL JS INIT
    FIX: replaced raw window.addEventListener with $(window).on()
    --------------------------------------------------------------*/
    var portfolioSections = document.querySelectorAll(".awura-portfolio-wrap2");
    $(window).on("scroll", function () {
      portfolioSections.forEach(function (section) {
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
    FIX: replaced .mouseenter()/.mouseleave() shortcuts with
         .on("mouseenter") / .on("mouseleave")
    --------------------------------------------------------------*/
    $(document).on("mouseenter", ".awura-btn-style-three, #awura-subscriber-btn2", function (e) {
      var parentOffset = $(this).offset();
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".awura-button-hover").css({
        left: relX,
        top: relY
      });
      $(this).prev(".awura-button-hover").removeClass("btn-desplode-circle").addClass("btn-explode-circle");
    });
    $(document).on("mouseleave", ".awura-btn-style-three, #awura-subscriber-btn2", function (e) {
      var parentOffset = $(this).offset();
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".awura-button-hover").css({
        left: relX,
        top: relY
      });
      $(this).prev(".awura-button-hover").removeClass("btn-explode-circle").addClass("btn-desplode-circle");
    });

    /*--------------------------------------------------------------
    AWURA ACCORDION JS INIT
    FIX: removed duplicate DOMContentLoaded wrapper (already inside
         document-ready); replaced .addEventListener("click") with
         jQuery event delegation via $(document).on("click")
    --------------------------------------------------------------*/
    var accordionGroups = document.querySelectorAll(".awura-accordion-wrapper");
    accordionGroups.forEach(function (group) {
      var items = group.querySelectorAll(".awura-accordion-item");
      items.forEach(function (item) {
        var content = item.querySelector(".awura-accordion-content");
        if (item.classList.contains("active") && content) {
          content.style.height = content.scrollHeight + "px";
        }
      });
    });
    $(document).on("click", ".awura-accordion-header", function () {
      var $header = $(this);
      var $item = $header.closest(".awura-accordion-item");
      var $group = $header.closest(".awura-accordion-wrapper");
      var $content = $item.find(".awura-accordion-content");

      // Close any open sibling
      $group.find(".awura-accordion-item.active").not($item).each(function () {
        $(this).removeClass("active");
        $(this).find(".awura-accordion-content").css("height", "0px");
      });

      // Toggle current
      $item.toggleClass("active");
      if ($item.hasClass("active")) {
        $content.css("height", $content[0].scrollHeight + "px");
      } else {
        $content.css("height", "0px");
      }
    });

    /*--------------------------------------------------------------
    TESTIMONIAL SLIDER JS INIT
    --------------------------------------------------------------*/
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
    TESTIMONIAL SLIDER JS INIT 2
    --------------------------------------------------------------*/
    var testimonial_slider2 = $(".awura-testimonial-init2");
    if (testimonial_slider2.is_exist()) {
      testimonial_slider2.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        prevArrow: '<button class="slide-arrow awura-testimonial-next2"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow: '<button class="slide-arrow awura-testimonial-prev2"><i class="ri-arrow-right-s-line"></i></button>',
        responsive: [{
          breakpoint: 479,
          settings: {
            arrows: false,
            autoplay: true
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TESTIMONIAL SLIDER JS INIT 3
    --------------------------------------------------------------*/
    var testimonial_slider3 = $(".awura-testimonial-init3");
    if (testimonial_slider3.is_exist()) {
      testimonial_slider3.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        speed: 800,
        prevArrow: '<button class="slide-arrow awura-testimonial-next3"><i class="ri-arrow-right-line"></i></button>',
        nextArrow: '<button class="slide-arrow awura-testimonial-prev3"><i class="ri-arrow-left-line"></i></button>',
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            arrows: false
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    TESTIMONIAL SLIDER JS INIT 4
    --------------------------------------------------------------*/
    var testimonial_slider4 = $(".awura-testimonial-init4");
    if (testimonial_slider4.is_exist()) {
      testimonial_slider4.slick({
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 1200,
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            arrows: false
          }
        }]
      });
    }

    /*--------------------------------------------------------------
    PRICING JS INIT
    FIX: removed inner DOMContentLoaded wrapper (already inside
         document-ready); replaced .addEventListener("click") with
         $(document).on("click")
    --------------------------------------------------------------*/
    var $toggle = $("#toggle");
    var $pricingPrices = $(".awura-pricing-price");
    if ($toggle.is_exist() && $pricingPrices.is_exist()) {
      var isYearly = false;
      $(document).on("click", "#toggle", function () {
        isYearly = !isYearly;
        $toggle.toggleClass("active");
        $pricingPrices.each(function () {
          var $price = $(this);
          var monthly = $price.data("monthly");
          var yearly = $price.data("yearly");
          var newPrice = isYearly ? yearly : monthly;
          var duration = isYearly ? "/year" : "/month";
          $price.css("opacity", "0");
          setTimeout(function () {
            $price.html("$" + newPrice + "<span>" + duration + "</span>");
            $price.css("opacity", "1");
          }, 250);
        });
      });
    }

    /*--------------------------------------------------------------
    PRICING JS INIT 3
    FIX: removed inner DOMContentLoaded wrapper; replaced
         .addEventListener("click") with $(document).on("click")
    --------------------------------------------------------------*/
    var $billingToggle = $(".awura-billing-toggle");
    var $prices3 = $(".awura-pricing-price3");
    if ($billingToggle.is_exist() && $prices3.is_exist()) {
      $(document).on("click", ".awura-billing-toggle .toggle-btn", function () {
        $(".awura-billing-toggle .toggle-btn").removeClass("active");
        $(this).addClass("active");
        var planType = $(this).data("plan");
        var label = planType === "annual" ? "/year" : "/month";
        $prices3.each(function () {
          var newPrice = $(this).data(planType);
          $(this).html(newPrice + "<span>" + label + "</span>");
        });
      });
    }

    /*--------------------------------------------------------------
    DASHBOARD ROTATED JS INIT
    FIX: removed inner DOMContentLoaded wrapper; replaced
         window.addEventListener("scroll") with $(window).on("scroll")
    --------------------------------------------------------------*/
    var rotatingImage = document.getElementById("rotating-image");
    if (rotatingImage) {
      var _updateRotation = function updateRotation() {
        currentRotation += (targetRotation - currentRotation) * smoothness;
        rotatingImage.style.transform = "perspective(1000px) rotateX(" + currentRotation + "deg)";
        requestAnimationFrame(_updateRotation);
      };
      var scrollThreshold = 400;
      var targetRotation = 20;
      var currentRotation = 20;
      var smoothness = 0.08;
      $(window).on("scroll", function () {
        var scrollTop = window.scrollY;
        var progress = Math.min(scrollTop / scrollThreshold, 1);
        targetRotation = 20 * (1 - progress);
      });
      _updateRotation();
    }

    /*--------------------------------------------------------------
    AWURA CHART V3 JS INIT
    FIX: removed inner DOMContentLoaded wrapper (already in ready)
    --------------------------------------------------------------*/
    var chartSectionProgressOne = document.getElementById("chart");
    var progressBars = document.querySelectorAll(".awura-progress-bar");
    if (chartSectionProgressOne && progressBars.length > 0) {
      var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            progressBars.forEach(function (bar) {
              bar.style.height = bar.getAttribute("data-height");
            });
            barObserver.unobserve(chartSectionProgressOne);
          }
        });
      }, {
        threshold: 0.5
      });
      barObserver.observe(chartSectionProgressOne);
    }

    /*--------------------------------------------------------------
    CHART CHART V4 JS INIT
    FIX: removed inner DOMContentLoaded wrapper
    --------------------------------------------------------------*/
    var chartSectionProgressTwo = document.getElementById("chartSectionProgressTwo");
    var chartCanvas = document.getElementById("myChart");
    if (chartSectionProgressTwo && chartCanvas) {
      var ctx = chartCanvas.getContext("2d");
      var targetData = [[0, 18000, 0, 2737, 0, 50000, 0, 17000], [33000, 0, 25000, 33000, 29000, 0, 27000, 0]];
      var initialData = targetData.map(function (row) {
        return row.map(function () {
          return 0;
        });
      });
      var chartInitialized = false;
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug"],
          datasets: [{
            label: "Blue Sales",
            data: initialData[0],
            backgroundColor: "#00c0ff",
            borderRadius: 6,
            barThickness: 20,
            categoryPercentage: 0.6,
            barPercentage: 1.0
          }, {
            label: "Yellow Sales",
            data: initialData[1],
            backgroundColor: "#ffee55",
            borderRadius: 6,
            barThickness: 20,
            categoryPercentage: 0.6,
            barPercentage: 1.0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: "index",
            intersect: false
          },
          animation: {
            duration: 1500,
            easing: "easeOutQuart"
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: "#ffffff",
              borderColor: "#e0e0e0",
              borderWidth: 1,
              titleColor: "#444",
              bodyColor: "#000",
              bodyFont: {
                weight: "bold"
              },
              padding: 10,
              callbacks: {
                label: function label(context) {
                  return "Sales $" + context.raw.toLocaleString();
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: 10,
                  weight: "400"
                },
                color: "rgba(3, 22, 11, 0.8)"
              }
            },
            y: {
              beginAtZero: true,
              max: 55000,
              ticks: {
                stepSize: 5000,
                callback: function callback(value) {
                  return value / 1000 + " k";
                },
                color: "rgba(3, 22, 11, 0.8)",
                font: {
                  size: 10
                }
              },
              grid: {
                drawBorder: false,
                color: "#fff"
              }
            }
          }
        }
      });
      var chartObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !chartInitialized) {
            myChart.data.datasets[0].data = targetData[0];
            myChart.data.datasets[1].data = targetData[1];
            myChart.update({
              duration: 1500,
              easing: "easeOutQuart"
            });
            chartInitialized = true;
          }
        });
      }, {
        threshold: 0.4
      });
      chartObserver.observe(chartSectionProgressTwo);
    }

    /*--------------------------------------------------------------
    CHART CHART CIRCLE V4 JS INIT
    FIX: removed inner DOMContentLoaded wrapper
    --------------------------------------------------------------*/
    var chartBox = document.getElementById("chartSectionCircle");
    var chartValue = document.getElementById("chartValue");
    var growthCanvas = document.getElementById("growthChart");
    if (chartBox && chartValue && growthCanvas) {
      var easeOutCubic = function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      };
      var startSmoothAnimation = function startSmoothAnimation(targetValue) {
        var startTime = null;
        var duration = 1600;
        function animate(currentTime) {
          if (!startTime) startTime = currentTime;
          var elapsed = currentTime - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var eased = easeOutCubic(progress);
          var value = Math.round(targetValue * eased);
          chartValue.textContent = value + "%";
          updateGrowthChart(value);
          if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
      };
      var updateGrowthChart = function updateGrowthChart(value) {
        if (growthChartInstance) growthChartInstance.destroy();
        growthChartInstance = new Chart(growthCtx, {
          type: "doughnut",
          data: {
            datasets: [{
              data: [value, (100 - value) / 1.5, (100 - value) / 2],
              backgroundColor: ["#6ED0FB", "#FFE872", "#EEF0F2"],
              borderWidth: 0,
              cutout: "70%",
              rotation: 270
            }]
          },
          options: {
            animation: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false
              }
            }
          }
        });
      };
      var growthCtx = growthCanvas.getContext("2d");
      var growthChartInstance = null;
      var circleAnimated = false;
      var circleObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !circleAnimated) {
            chartBox.classList.add("active");
            startSmoothAnimation(73);
            circleAnimated = true;
          }
        });
      }, {
        threshold: 0.6
      });
      circleObserver.observe(chartBox);
    }

    /*--------------------------------------------------------------
    PI CHART V5 JS INIT
    FIX: removed inner DOMContentLoaded wrapper
    --------------------------------------------------------------*/
    var pieCanvas = document.getElementById("myPieChart");
    var pieChartInit = false;
    if (pieCanvas) {
      var createSequentialPieChart = function createSequentialPieChart() {
        var pieCtx = pieCanvas.getContext("2d");
        var data = [55, 15, 15, 15];
        var colors = ["#855CF8", "#B085FF", "#503795", "#000000"];
        var labels = ["A", "B", "C", "D"];
        var chart = new Chart(pieCtx, {
          type: "pie",
          data: {
            labels: labels,
            datasets: [{
              data: data.map(function () {
                return 0;
              }),
              backgroundColor: colors,
              borderWidth: 0
            }]
          },
          options: {
            animation: {
              duration: 1000,
              easing: "easeOutQuart"
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
        var i = 0;
        function animateSlice() {
          if (i >= data.length) return;
          chart.data.datasets[0].data[i] = data[i];
          chart.update();
          i++;
          setTimeout(animateSlice, 300);
        }
        animateSlice();
      };
      var pieObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !pieChartInit) {
            pieChartInit = true;
            createSequentialPieChart();
          }
        });
      }, {
        threshold: 0.5
      });
      pieObserver.observe(pieCanvas);
    }

    /*--------------------------------------------------------------
    TAB V5 JS INIT
    FIX: removed inner DOMContentLoaded wrapper; replaced
         .addEventListener("click") with $(document).on("click")
         for event delegation
    --------------------------------------------------------------*/
    $(document).on("click", ".awura-tab-menu-value", function () {
      var tabId = $(this).data("tab");
      $(".awura-tab-menu-value").removeClass("active");
      $(".awura-tab-body").removeClass("active");
      $(this).addClass("active");
      $(".awura-tab-body[data-tab='" + tabId + "']").addClass("active");
    });

    /*--------------------------------------------------------------
    AWURA V6 CONTENT THUMB JS INIT (GSAP)
    --------------------------------------------------------------*/
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".awura-content-thumb.left-thumb", {
        y: -1200,
        scrollTrigger: {
          trigger: ".awura-single-content-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      gsap.to(".awura-content-thumb.right-thumb", {
        y: -1700,
        scrollTrigger: {
          trigger: ".awura-single-content-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    /*--------------------------------------------------------------
    HIDE SHOW PASSWORD JS INIT
    FIX: replaced .addEventListener("click") forEach with
         $(document).on("click") event delegation
    --------------------------------------------------------------*/
    $(document).on("click", ".toggle-password", function () {
      var $input = $(this).closest(".awura-account-field").find(".password-input");
      var $icon = $(this).find("i");
      if ($input.attr("type") === "password") {
        $input.attr("type", "text");
        $icon.removeClass("ri-eye-line").addClass("ri-eye-off-line");
      } else {
        $input.attr("type", "password");
        $icon.removeClass("ri-eye-off-line").addClass("ri-eye-line");
      }
    });

    /*--------------------------------------------------------------
    THUMB HOVER JS INIT
    FIX: replaced .addEventListener("mouseenter/mouseleave") with
         $(document).on("mouseenter/mouseleave") for delegation
    --------------------------------------------------------------*/
    $(document).on("mouseenter", ".hover-two", function () {
      $(".thumb-two").addClass("active");
    });
    $(document).on("mouseleave", ".hover-two", function () {
      $(".thumb-two").removeClass("active");
    });
    $(document).on("mouseenter", ".hover-three", function () {
      $(".thumb-three").addClass("active");
    });
    $(document).on("mouseleave", ".hover-three", function () {
      $(".thumb-three").removeClass("active");
    });

    /*--------------------------------------------------------------
    TEXT SCROLL OVERLAY JS INIT (GSAP)
    --------------------------------------------------------------*/
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      var textElements = gsap.utils.toArray(".text-overlay-animation");
      textElements.forEach(function (text) {
        gsap.to(text, {
          backgroundSize: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: text,
            start: "center 80%",
            end: "center 20%",
            scrub: true
          }
        });
      });
    }

    /*--------------------------------------------------------------
    TEAM PROGRESS JS INIT
    FIX: replaced window.addEventListener with $(window).on()
    --------------------------------------------------------------*/
    var teamBars = document.querySelectorAll(".awura-team-progress-fill");
    function animateTeamBars() {
      teamBars.forEach(function (bar) {
        var rect = bar.getBoundingClientRect();
        var windowH = window.innerHeight;
        if (rect.top < windowH - 50) {
          bar.style.width = bar.getAttribute("data-width") + "%";
        }
      });
    }
    $(window).on("scroll", animateTeamBars);
    $(window).on("load", animateTeamBars);

    /*--------------------------------------------------------------
    AWURA PRELOADER JS INIT
    FIX: replaced $(window).load() with $(window).on("load")
    --------------------------------------------------------------*/
    $(window).on("load", function () {
      var preloader = document.getElementById("awura-preloader");
      if (preloader) {
        preloader.classList.add("fade-out");
        setTimeout(function () {
          preloader.style.display = "none";
          document.body.style.overflow = "auto";
        }, 600);
      }

      /*--------------------------------------------------------------
      AWURA THREE COLUMN FILTER JS
      FIX: replaced $optionLinks.click() with
           $(document).on("click") event delegation;
           replaced $(window).resize() with $(window).on("resize")
      --------------------------------------------------------------*/
      var kdg_filter_gallery = $("#awura-course-column");
      if (kdg_filter_gallery.is_exist()) {
        var $container = kdg_filter_gallery;
        var colWidth = function colWidth() {
          var w = $container.width();
          var columnNum = 1;
          var columnWidth = 0;
          if (w > 1200) {
            columnNum = 3;
          } else if (w > 900) {
            columnNum = 2;
          } else if (w > 600) {
            columnNum = 1;
          } else if (w > 450) {
            columnNum = 1;
          } else if (w > 385) {
            columnNum = 1;
          }
          columnWidth = Math.floor(w / columnNum);
          $container.find(".collection-grid-item").each(function () {
            var $item = $(this);
            var multiplier_w = $item.attr("class").match(/collection-grid-item-w(\d)/);
            var multiplier_h = $item.attr("class").match(/collection-grid-item-h(\d)/);
            var width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth;
            $item.css({
              width: width
            });
          });
          return columnWidth;
        };
        var isotope = function isotope() {
          $container.isotope({
            resizable: false,
            itemSelector: ".collection-grid-item",
            masonry: {
              columnWidth: colWidth(),
              gutterWidth: 0
            }
          });
        };
        isotope();

        // FIX: .resize() → .on("resize")
        $(window).on("resize", isotope);

        // FIX: $optionLinks.click() → $(document).on("click") with delegation
        $(document).on("click", ".awura-course-menu .option-set li", function () {
          var $this = $(this);
          var $optionSet = $this.closest(".option-set");
          $optionSet.find(".active").removeClass("active");
          $this.addClass("active");
          var options = {};
          var key = $optionSet.data("option-key");
          var value = $this.data("option-value");
          value = value === "false" ? false : value;
          options[key] = value;
          if (key === "layoutMode" && typeof changeLayoutMode === "function") {
            changeLayoutMode($this, options);
          } else {
            $container.isotope(options);
          }
          return false;
        });
      }
    }); // End $(window).on("load")

    /*--------------------------------------------------------------
    AWURA WOW JS INIT
    --------------------------------------------------------------*/
    if (typeof WOW !== "undefined") {
      new WOW().init();
    }

    /*--------------------------------------------------------------
    AWURA MAP JS INIT
    FIX: replaced google.maps.event.addDomListener(window, 'load')
         with $(window).on("load") — preferred modern approach
    --------------------------------------------------------------*/
    var $google_map = $("#map");
    if ($google_map.is_exist()) {
      $(window).on("load", function initMap() {
        var mapOptions = {
          zoom: 11,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          draggable: true,
          disableDefaultUI: true,
          center: new google.maps.LatLng(40.6700, -73.9400),
          styles: [{
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f7f1df"
            }]
          }, {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
              "color": "#d0e3b4"
            }]
          }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [{
              "color": "#fbd3da"
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#bde6ab"
            }]
          }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffe15f"
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#efd151"
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "black"
            }]
          }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#cfb2db"
            }]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#a2daf2"
            }]
          }]
        };
        var mapElement = document.getElementById("map");
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.6700, -73.9400),
          map: map,
          title: "awura"
        });
        var contentString = '<div id="content"><div id="tpw"><h3>awura</h3></div></div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 280
        });
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {
          marker.setAnimation(null);
        }, 750);

        // FIX: google.maps.event.addListener is fine (Google Maps API native),
        //      but kept tidy with anonymous function
        google.maps.event.addListener(marker, "click", function () {
          infowindow.open(map, marker);
        });
      });
    }
  }); // End $(function) — document ready
})(jQuery);