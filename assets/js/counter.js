function createRollingCounter(element) {
  const targetValue = element.getAttribute("data-value");

  if (!targetValue) return;

  element.innerHTML = "";

  // Create digit containers
  for (let char of targetValue) {
    if (isNaN(char)) continue;

    const digitContainer = document.createElement("div");
    digitContainer.className = "digit";

    for (let i = 0; i <= 9; i++) {
      const span = document.createElement("span");
      span.textContent = i;
      digitContainer.appendChild(span);
    }

    element.appendChild(digitContainer);
  }

  // Animate digits
  requestAnimationFrame(() => {
    const digits = element.querySelectorAll(".digit");
    digits.forEach((digit, index) => {
      const targetDigit = parseInt(targetValue[index]);
      const spanHeight = digit
        .querySelector("span")
        .getBoundingClientRect().height;

      setTimeout(() => {
        digit.querySelectorAll("span").forEach((span) => {
          span.style.transform = `translateY(-${targetDigit * spanHeight}px)`;
        });
      }, index * 200); // stagger animation
    });
  });
}

// Scroll-triggered logic
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".rolling-counter");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          createRollingCounter(entry.target);
          obs.unobserve(entry.target); // only run once
        }
      });
    },
    { threshold: 0.5 }
  ); // trigger when 50% visible

  counters.forEach((counter) => observer.observe(counter));
});
