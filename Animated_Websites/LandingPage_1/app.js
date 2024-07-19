const tl = gsap.timeline();

tl.from("nav h2", {
  y: -30,
  opacity: 0,
  duration: 1,
});

tl.from("nav ul li", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl.from("#header h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

tl.from("#header img", {
  x: 200,
  opacity: 0,
  rotate: 40,
  stagger: 0.3,
});

tl.from("footer p", {
  y: -10,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
