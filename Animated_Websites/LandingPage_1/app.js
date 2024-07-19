// const tl = tim;

gsap.from("nav h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.1,
});

gsap.from("nav ul li", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  stagger: 0.15,
});
