$(document).ready(function () {
  const $container = $(".dir-ltl");
  const $clones = $container.clone();
  $container.append($clones);

  let scrollAmount = 0;
  let isPaused = false;

  function marqueeScroll() {
    if (!isPaused) {
      scrollAmount += 2; // speed
      $container.css("transform", `translateX(-${scrollAmount}px)`);
      if (scrollAmount >= $container[0].scrollWidth / 2) {
        scrollAmount = 0;
      }
    }
    requestAnimationFrame(marqueeScroll);
  }
  marqueeScroll();

  $(".inner-mwrquee-wra")
    .on("mouseenter", function () {
      isPaused = true;
    })
    .on("mouseleave", function () {
      isPaused = false;
    });
});
