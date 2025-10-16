$(document).ready(function () {
  const $container = $(".dir-rtl");
  const $clones = $container.clone();
  $container.append($clones.html());

  let scrollAmount = 0;
  let isPaused = false;

  function marqueeScroll() {
    if (!isPaused) {
      scrollAmount += 2; // speed
      $container.css("transform", `translateX(${scrollAmount}px)`);
      if (scrollAmount >= $container[0].scrollWidth / 2) {
        scrollAmount = 0;
      }
    }
    requestAnimationFrame(marqueeScroll);
  }
  marqueeScroll();

  const $wrapper = $(".inner-mwrquee-wra");
  $wrapper.on("mouseenter", () => (isPaused = true));
  $wrapper.on("mouseleave", () => (isPaused = false));
});
