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
    (function () {
      var el = document.getElementById("year");
      if (el) el.textContent = new Date().getFullYear();
    })();

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
  TESTIMONIAL SLIDER JS INIT
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
  TESTIMONIAL SLIDER JS INIT
  ------------------------------------------------------------*/
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
  TESTIMONIAL SLIDER JS INIT
  ------------------------------------------------------------*/
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
  TESTIMONIAL SLIDER JS INIT
  ------------------------------------------------------------*/
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

  /*--------------------------------------------------------------
  PRICING JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var billingToggle = document.querySelector(".awura-billing-toggle");
    var prices = document.querySelectorAll(".awura-pricing-price3");

    // যদি এলিমেন্ট না থাকে তাহলে কোড রান হবে না
    if (!billingToggle || !prices.length) return;
    var toggleButtons = billingToggle.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        toggleButtons.forEach(function (b) {
          return b.classList.remove("active");
        });
        btn.classList.add("active");
        var planType = btn.getAttribute("data-plan");
        prices.forEach(function (price) {
          var newPrice = price.getAttribute("data-".concat(planType));
          var label = planType === "annual" ? "/year" : "/month";
          price.innerHTML = "".concat(newPrice, "<span>").concat(label, "</span>");
        });
      });
    });
  });

  /*--------------------------------------------------------------
  DASHBOARD ROTATED JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById("rotating-image");
    if (!image) return;
    var scrollThreshold = 400;
    var targetRotation = 20;
    var currentRotation = 20;
    var smoothness = 0.08;
    function updateRotation() {
      currentRotation += (targetRotation - currentRotation) * smoothness;
      image.style.transform = "perspective(1000px) rotateX(".concat(currentRotation, "deg)");
      requestAnimationFrame(updateRotation);
    }
    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY;
      var progress = Math.min(scrollTop / scrollThreshold, 1);
      targetRotation = 20 * (1 - progress);
    });
    updateRotation();
  });

  /*--------------------------------------------------------------
  AWURA CHART V3 JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var chartSectionPprogressOne = document.getElementById("chart");
    var bars = document.querySelectorAll(".awura-progress-bar");

    // ✅ Stop if chart or bars are not found (prevents errors)
    if (!chartSectionPprogressOne || bars.length === 0) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          bars.forEach(function (bar) {
            var height = bar.getAttribute("data-height");
            bar.style.height = height;
          });

          // Unobserve so it animates only once
          observer.unobserve(chartSectionPprogressOne);
        }
      });
    }, {
      threshold: 0.5
    });
    observer.observe(chartSectionPprogressOne);
  });

  /*--------------------------------------------------------------
  CHART CHART V4 JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var chartSectionProgressTwo = document.getElementById("chartSectionProgressTwo");
    var canvas = document.getElementById("myChart");

    // ❗ যদি section বা canvas না থাকে, script stop
    if (!chartSectionProgressTwo || !canvas) return;
    var ctx = canvas.getContext("2d");

    // Target data
    var targetData = [[0, 18000, 0, 2737, 0, 50000, 0, 17000],
    // Blue Sales
    [33000, 0, 25000, 33000, 29000, 0, 27000, 0] // Yellow Sales
    ];

    // Initial data (all zeros)
    var initialData = targetData.map(function (row) {
      return row.map(function () {
        return 0;
      });
    });
    var chartInitialized = false;

    // Chart instance
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

    // Scroll-trigger Animation
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !chartInitialized) {
          // Update chart data to target values
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
    observer.observe(chartSectionProgressTwo);
  });

  /*--------------------------------------------------------------
  CHART CHART CIRCLE V4 JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var chartBox = document.getElementById("chartSectionCircle");
    var chartValue = document.getElementById("chartValue");
    var canvas = document.getElementById("growthChart");
    if (!chartBox || !chartValue || !canvas) return;
    var ctx = canvas.getContext("2d");
    var chartInstance = null;
    var animated = false;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated) {
          chartBox.classList.add("active");
          startSmoothAnimation(73);
          animated = true;
        }
      });
    }, {
      threshold: 0.6
    });
    observer.observe(chartBox);
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    function startSmoothAnimation(targetValue) {
      var startTime = null;
      var duration = 1600;
      function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var eased = easeOutCubic(progress);
        var value = Math.round(targetValue * eased);
        chartValue.textContent = value + "%";
        updateChart(value);
        if (progress < 1) requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }
    function updateChart(value) {
      if (chartInstance) chartInstance.destroy();
      chartInstance = new Chart(ctx, {
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
    }
  });

  /*--------------------------------------------------------------
  PI CHART V5 JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("myPieChart");
    var chartInit = false;
    if (!canvas) return;
    function createSequentialPieChart() {
      var ctx = canvas.getContext("2d");
      var data = [55, 15, 15, 15];
      var colors = ["#855CF8", "#B085FF", "#503795", "#000000"];
      var labels = ["A", "B", "C", "D"];
      var chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [{
            data: data.map(function () {
              return 0;
            }),
            // শুরুতে সব 0
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

      // Sequential animation for each slice
      var i = 0;
      function animateSlice() {
        if (i >= data.length) return;
        chart.data.datasets[0].data[i] = data[i];
        chart.update();
        i++;
        setTimeout(animateSlice, 300); // 0.3s পর পর slice animate হবে
      }
      animateSlice();
    }

    // Scroll Trigger
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !chartInit) {
          chartInit = true;
          createSequentialPieChart();
        }
      });
    }, {
      threshold: 0.5
    });
    observer.observe(canvas);
  });
  /*--------------------------------------------------------------
  TAB V5 JS INIT
  ------------------------------------------------------------*/
  document.addEventListener("DOMContentLoaded", function () {
    var tabButtons = document.querySelectorAll(".awura-tab-menu-value");
    var tabContents = document.querySelectorAll(".awura-tab-body");
    tabButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var tabId = button.getAttribute("data-tab");

        // Remove active classes
        tabButtons.forEach(function (btn) {
          return btn.classList.remove("active");
        });
        tabContents.forEach(function (content) {
          return content.classList.remove("active");
        });

        // Add active class to clicked tab
        button.classList.add("active");
        document.querySelector(".awura-tab-body[data-tab=\"".concat(tabId, "\"]")).classList.add("active");
      });
    });
  });

  /*--------------------------------------------------------------
  AWURA V6 CONTENT THUMB JS INIT
  ------------------------------------------------------------*/
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

  /*--------------------------------------------------------------
  HIDE SHOW PASSWORD JS INIT
  ------------------------------------------------------------*/

  document.querySelectorAll(".toggle-password").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var input = btn.closest(".awura-account-field").querySelector(".password-input");
      var icon = btn.querySelector("i");
      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("ri-eye-line");
        icon.classList.add("ri-eye-off-line");
      } else {
        input.type = "password";
        icon.classList.remove("ri-eye-off-line");
        icon.classList.add("ri-eye-line");
      }
    });
  });

  /*--------------------------------------------------------------
  THUMB HOVER JS INIT
  ------------------------------------------------------------*/
  var thumbTwo = document.querySelector(".thumb-two");
  var thumbThree = document.querySelector(".thumb-three");
  var hTwo = document.querySelector(".hover-two");
  var hThree = document.querySelector(".hover-three");

  // Hover Two
  if (hTwo && thumbTwo) {
    hTwo.addEventListener("mouseenter", function () {
      thumbTwo.classList.add("active");
    });
    hTwo.addEventListener("mouseleave", function () {
      thumbTwo.classList.remove("active");
    });
  }

  // Hover Three
  if (hThree && thumbThree) {
    hThree.addEventListener("mouseenter", function () {
      thumbThree.classList.add("active");
    });
    hThree.addEventListener("mouseleave", function () {
      thumbThree.classList.remove("active");
    });
  }
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

    /*--------------------------------------------------------------
    KDG THREE COLUMN FILTER JS
    ------------------------------------------------------------*/
    var kdg_filter_gallery = $("#awura-course-column");
    if (kdg_filter_gallery.is_exist()) {
      var $container = $(kdg_filter_gallery),
        colWidth = function colWidth() {
          var w = $container.width(),
            columnNum = 1,
            columnWidth = 0;
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
            var $item = $(this),
              multiplier_w = $item.attr("class").match(/collection-grid-item-w(\d)/),
              multiplier_h = $item.attr("class").match(/collection-grid-item-h(\d)/),
              width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
              height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
            $item.css({
              width: width
              //height: height
            });
          });
          return columnWidth;
        },
        isotope = function isotope() {
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
      $(window).resize(isotope);
      var $optionSets = $(".awura-course-menu .option-set"),
        $optionLinks = $optionSets.find("li");
      $optionLinks.click(function () {
        var $this = $(this);
        var $optionSet = $this.parents(".option-set");
        $optionSet.find(".active").removeClass("active");
        $this.addClass("active");

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
          key = $optionSet.attr("data-option-key"),
          value = $this.attr("data-option-value");
        // parse 'false' as false boolean
        value = value === "false" ? false : value;
        options[key] = value;
        if (key === "layoutMode" && typeof changeLayoutMode === "function") {
          // changes in layout modes need extra logic
          changeLayoutMode($this, options);
        } else {
          // creativewise, apply new options
          $container.isotope(options);
        }
        return false;
      });
    }
  }); // End window LODE

  /*--------------------------------------------------------------
  AWURA WOW JS INIT
  --------------------------------------------------------------*/
  new WOW().init();
})(jQuery);