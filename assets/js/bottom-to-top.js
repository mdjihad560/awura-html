$(function () {
  const $container = $(".dir-bottom-top");
  const $content = $container.find(".awura-hero-card-slider");

  if ($container.length === 0) return;

  const $clone = $content.clone();
  $container.append($clone);

  let scrollY = 0;
  let speed = 1; // Adjust speed
  let contentHeight = $content.height();

  function animateMarquee() {
    scrollY += speed;
    $container.scrollTop(scrollY);

    if (scrollY >= contentHeight) {
      scrollY = 0;
    }
    requestAnimationFrame(animateMarquee);
  }

  animateMarquee();
});
