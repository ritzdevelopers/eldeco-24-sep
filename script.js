const slider = document.getElementById("slider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let scrollAmount = 0;
const cardWidth = slider.children[0].offsetWidth + 16; // card width + margin
const visibleCards = 3;

next.addEventListener("click", () => {
  scrollAmount += cardWidth;
  if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0; // loop back
  }
  slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  scrollAmount -= cardWidth;
  if (scrollAmount < 0) {
    scrollAmount = slider.scrollWidth - slider.clientWidth;
  }
  slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

const menuBtn = document.getElementById("mobile-menu-button");
const closeBtn = document.getElementById("mobile-menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    duration: 0.5,
    y: "0%",
    opacity: 1,
    ease: "power2.out",
  });
});

closeBtn.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    duration: 0.5,
    y: "-100%",
    opacity: 0,
    ease: "power2.in",
  });
});

window.addEventListener("load", () => {
  // Animate hero content
  gsap.to("#hero-title", { duration: 1, y: 0, opacity: 1, ease: "power3.out" });
  gsap.to("#hero-subtitle", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 0.3,
    ease: "power3.out",
  });
  gsap.to("#hero-cta", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 0.6,
    ease: "power3.out",
  });
});
