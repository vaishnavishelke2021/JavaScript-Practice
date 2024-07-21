var tl = gsap.timeline();

tl.from("nav h1", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  delay: 0.5,
});

tl.from("nav ul li,nav ul button", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
    stagger: 0.1
  });