const slider = document.getElementById("slider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const cards = slider.children;
let activeIndex = 1; // second card

function centerCard(index) {
  const card = cards[index];
  const sliderRect = slider.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const offset =
    card.offsetLeft -
    (sliderRect.width / 2 - cardRect.width / 2);

  slider.scrollTo({
    left: offset,
    behavior: "smooth",
  });
}

// Center the first card on load
centerCard(activeIndex);

next.addEventListener("click", () => {
  if (activeIndex < cards.length - 1) {
    activeIndex++;
  } else {
    activeIndex = 0; // loop back to first
  }
  centerCard(activeIndex);
});

prev.addEventListener("click", () => {
  if (activeIndex > 0) {
    activeIndex--;
  } else {
    activeIndex = cards.length - 1; // loop back to last
  }
  centerCard(activeIndex);
});




    const menuBtn = document.getElementById("mobile-menu-button");
  const closeBtn = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    gsap.to(mobileMenu, {
      duration: 0.5,
      y: "0%",
      opacity: 1,
      ease: "power2.out"
    });
  });

  closeBtn.addEventListener("click", () => {
    gsap.to(mobileMenu, {
      duration: 0.5,
      y: "-100%",
      opacity: 0,
      ease: "power2.in"
    });
  });

    window.addEventListener('load', () => {
    // Animate hero content
    gsap.to("#hero-title", {duration: 1, y: 0, opacity: 1, ease: "power3.out"});
    gsap.to("#hero-subtitle", {duration: 1, y: 0, opacity: 1, delay: 0.3, ease: "power3.out"});
    gsap.to("#hero-cta", {duration: 1, y: 0, opacity: 1, delay: 0.6, ease: "power3.out"});
  });