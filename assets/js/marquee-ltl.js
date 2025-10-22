$(function () {
  const $container = $(".dir-ltl");

  if ($container.length === 0) return;

  const $clones = $container.clone();
  $container.append($clones);

  let scrollAmount = 0;
  let isPaused = false;

  function marqueeScroll() {
    if (!isPaused) {
      scrollAmount += 1.2; // speed
      $container.css("transform", `translateX(-${scrollAmount}px)`);
      if (scrollAmount >= $container[0].scrollWidth / 2) {
        scrollAmount = 0;
      }
    }
    requestAnimationFrame(marqueeScroll);
  }

  marqueeScroll();

  const $wrapper = $(".awura-integration-slider-box");
  $wrapper.on("mouseenter", () => (isPaused = true));
  $wrapper.on("mouseleave", () => (isPaused = false));

});
