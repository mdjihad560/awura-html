function createRollingCounter(element) {
  const targetValue = element.getAttribute("data-value");
  element.innerHTML = "";

  for (let char of targetValue) {
    if (isNaN(char)) continue;

    const digitContainer = document.createElement("div");
    digitContainer.className = "digit";

    for (let i = 0; i < 10; i++) {
      const span = document.createElement("span");
      span.textContent = i;
      digitContainer.appendChild(span);
    }

    element.appendChild(digitContainer);
  }
}

function animateRollingCounter(element) {
  const targetValue = element.getAttribute("data-value");
  const digits = element.querySelectorAll(".digit");

  digits.forEach((digitContainer, index) => {
    const targetDigit = +targetValue[index];
    digitContainer.style.transform = `translateY(-${targetDigit * 60}px)`;
  });
}

// Create all counters
const counters = document.querySelectorAll(".rolling-counter");
counters.forEach(createRollingCounter);

// Scroll trigger
let started = false;
window.addEventListener("scroll", () => {
  const section = document.querySelector("#counter-section");
  const rect = section.getBoundingClientRect();

  if (!started && rect.top < window.innerHeight && rect.bottom >= 0) {
    started = true;
    counters.forEach(animateRollingCounter);
  }
});
