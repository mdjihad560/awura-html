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
  AXIMO MAGNIFIC POPUP JS INIT
  ------------------------------------------------------------*/
  var popup_youtube = $(".video-init");
  if (popup_youtube.is_exist()) {
    popup_youtube.magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade"
    });
  }

  // scroll
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
  var sections = document.querySelectorAll(".awura-portfolio-wrap2");
  window.addEventListener("scroll", function () {
    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();

      // যদি সেকশন viewport এর মধ্যে থাকে
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });

  // card scroll
  // const sections = document.querySelectorAll(".awura-portfolio-wrap2");

  // window.addEventListener("scroll", () => {
  //   sections.forEach((section) => {
  //     const rect = section.getBoundingClientRect();

  //     // যদি সেকশন viewport এর মধ্যে থাকে
  //     if (
  //       rect.top < window.innerHeight * 0.8 &&
  //       rect.bottom > window.innerHeight * 0.2
  //     ) {
  //       section.classList.add("active");
  //     } else {
  //       section.classList.remove("active");
  //     }
  //   });
  // });

  // // video
  // // Elements
  // const video = document.getElementById("video");
  // const playPause = document.getElementById("playPause");
  // const playIcon = document.getElementById("playIcon");
  // const pauseIcon = document.getElementById("pauseIcon");
  // const currentTimeEl = document.getElementById("currentTime");
  // const progress = document.getElementById("progress");
  // const muteBtn = document.getElementById("muteBtn");
  // const soundOn = document.getElementById("soundOn");
  // const soundOff = document.getElementById("soundOff");
  // const fsBtn = document.getElementById("fsBtn");
  // const controls = document.getElementById("controls");
  // const playerCard = document.getElementById("playerCard");

  // // Format seconds -> M:SS
  // function formatTime(sec) {
  //   sec = Math.floor(sec);
  //   const m = Math.floor(sec / 60);
  //   const s = sec % 60;
  //   return m + ":" + (s < 10 ? "0" + s : s);
  // }

  // // Toggle play/pause
  // function updatePlayUI() {
  //   if (video.paused || video.ended) {
  //     playIcon.style.display = "";
  //     pauseIcon.style.display = "none";
  //     playPause.setAttribute("aria-label", "Play");
  //   } else {
  //     playIcon.style.display = "none";
  //     pauseIcon.style.display = "";
  //     playPause.setAttribute("aria-label", "Pause");
  //   }
  // }

  // playPause.addEventListener("click", () => {
  //   if (video.paused || video.ended) video.play();
  //   else video.pause();
  //   updatePlayUI();
  // });

  // // Clicking the video toggles play
  // video.addEventListener("click", () => {
  //   if (video.paused) video.play();
  //   else video.pause();
  //   updatePlayUI();
  // });

  // // Update time display & progress bar as video plays
  // video.addEventListener("timeupdate", () => {
  //   currentTimeEl.textContent = formatTime(video.currentTime);
  //   if (video.duration) {
  //     const percent = (video.currentTime / video.duration) * 100;
  //     progress.value = percent;
  //     // update visual background size to show filled part
  //     progress.style.backgroundSize = percent + "% 100%";
  //   }
  // });

  // // When metadata loaded, set duration in UI if you want; here we keep currentTime only
  // video.addEventListener("loadedmetadata", () => {
  //   // ensure progress max uses percent range 0..100
  //   progress.value = 0;
  //   progress.style.backgroundSize = "0% 100%";
  // });

  // // seek when user moves progress
  // let seeking = false;
  // progress.addEventListener("input", (e) => {
  //   seeking = true;
  //   const pct = parseFloat(e.target.value);
  //   progress.style.backgroundSize = pct + "% 100%";
  // });
  // progress.addEventListener("change", (e) => {
  //   const pct = parseFloat(e.target.value);
  //   if (video.duration) {
  //     video.currentTime = (pct / 100) * video.duration;
  //   }
  //   seeking = false;
  // });

  // // mute / unmute
  // muteBtn.addEventListener("click", () => {
  //   video.muted = !video.muted;
  //   soundOn.style.display = video.muted ? "none" : "";
  //   soundOff.style.display = video.muted ? "" : "none";
  // });

  // // fullscreen
  // fsBtn.addEventListener("click", () => {
  //   if (!document.fullscreenElement) {
  //     if (playerCard.requestFullscreen) playerCard.requestFullscreen();
  //     else if (playerCard.webkitRequestFullscreen)
  //       playerCard.webkitRequestFullscreen();
  //   } else {
  //     if (document.exitFullscreen) document.exitFullscreen();
  //     else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  //   }
  // });

  // // Keep UI in sync if playback changed elsewhere
  // video.addEventListener("play", updatePlayUI);
  // video.addEventListener("pause", updatePlayUI);
  // video.addEventListener("ended", updatePlayUI);

  // // hide controls if wanted after idle (optional). If you prefer always visible, remove this block.
  // let hideTimer;
  // function showControls() {
  //   controls.style.opacity = "1";
  //   controls.style.transform = "translateY(0)";
  //   if (hideTimer) clearTimeout(hideTimer);
  //   hideTimer = setTimeout(() => {
  //     if (!video.paused) controls.style.opacity = "1"; // keep visible — design choice; keep visible for clarity
  //   }, 3000);
  // }
  // playerCard.addEventListener("mousemove", showControls);
  // playerCard.addEventListener("touchstart", showControls);

  // // initial UI state
  // updatePlayUI();
  // soundOff.style.display = "none";

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