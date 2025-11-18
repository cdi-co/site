// script.js – Optionnel
document.addEventListener("scroll", () => {
  document.querySelectorAll('section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});