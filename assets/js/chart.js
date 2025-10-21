/*--------------------------------------------------------------
AWURA PROGRESS JS INIT
------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const chartSection = document.getElementById("chart");
  const bars = document.querySelectorAll(".awura-progress-bar");

  // ✅ Stop if chart or bars are not found (prevents errors)
  if (!chartSection || bars.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bars.forEach((bar) => {
            const height = bar.getAttribute("data-height");
            bar.style.height = height;
          });

          // Unobserve so it animates only once
          observer.unobserve(chartSection);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(chartSection);
});
// end v3