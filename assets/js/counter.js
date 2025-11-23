function createRollingCounter(element) {
  const targetValue = element.getAttribute("data-value");
  if (!targetValue) return;

  element.innerHTML = "";

  // Create digits
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

  animateDigits(element, targetValue);
}

// Animation logic separated
function animateDigits(element, targetValue) {
  const digits = element.querySelectorAll(".digit");

  requestAnimationFrame(() => {
    digits.forEach((digit, index) => {
      const targetDigit = parseInt(targetValue[index]);
      const spanHeight = digit.querySelector("span").offsetHeight;

      digit.style.transform = `translateY(-${targetDigit * spanHeight}px)`;
    });
  });
}

// Scroll trigger
window.addEventListener("load", () => {
  const counters = document.querySelectorAll(".rolling-counter");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          createRollingCounter(entry.target);
          entry.target.classList.add("counter-activated");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));

  // IMPORTANT — Fix for resize breaking layout
  window.addEventListener("resize", () => {
    document
      .querySelectorAll(".rolling-counter.counter-activated")
      .forEach((el) => {
        const value = el.getAttribute("data-value");
        animateDigits(el, value); // recalc height & fix layout
      });
  });
});
