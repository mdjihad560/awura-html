$(document).ready(function () {
  const $container = $(".dir-rtl");

  // If .dir-rtl not found → stop script to avoid error
  if ($container.length === 0) return;

  const $clones = $container.clone();
  $container.append($clones.html());

  let scrollAmount = 0;
  let isPaused = false;

  function marqueeScroll() {
    if (!isPaused) {
      scrollAmount += 1.2; // speed
      $container.css("transform", `translateX(${scrollAmount}px)`);

      if (scrollAmount >= $container[0].scrollWidth / 2) {
        scrollAmount = 0;
      }
    }
    requestAnimationFrame(marqueeScroll);
  }
  marqueeScroll();

  const $wrapper = $(".awura-integration-slider-box");

  if ($wrapper.length > 0) {
    $wrapper.on("mouseenter", () => (isPaused = true));
    $wrapper.on("mouseleave", () => (isPaused = false));
  }
});
