// GSAP Animation for Hero Text
gsap.from(".hero h1", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".hero p", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  delay: 0.5,
  ease: "power2.out"
});

gsap.from(".scroll-down", {
  duration: 1,
  opacity: 0,
  delay: 1,
  ease: "power2.out"
});

// Fade-In Sections on Scroll
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
