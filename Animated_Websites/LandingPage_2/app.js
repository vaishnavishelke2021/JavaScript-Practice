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
  stagger: 0.1,
});

tl.from("#container .containerL h1", {
  x: -200,
  opacity: 0,
  duration: 0.7,
  ease: "power1.out",
}, "-=0.3");

tl.from("#container .containerL p", {
  x: -150,
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
});

tl.from("#container .containerL button", {
  x: -150,
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
});

tl.from(
  "#container .containerR img",
  {
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 0.3,
    ease: "power1.out",
  },
  "-=0.8"
);
