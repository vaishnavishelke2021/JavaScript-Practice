var tl = gsap.timeline();

tl.from(".line h1", {
  y: 100,
  duration: 0.6,
  delay: 0.4,
  stagger: 0.15,
});

tl.from(
  ".counting",
  {
    scale: 0,
    duration: 0.3,
  },
  "-=0.7"
);

let count = document.querySelector(".count");
let grow = 0;
setInterval(() => {
  if (grow < 100) {
    count.innerHTML = grow++;
  } else {
    count.innerHTML = 100;
  }
}, 30);

tl.from(
  "#line3 h2",
  {
    scale: 0,
    opacity: 0,
    duration: 0.2,
  },
  "-=0.2"
);

tl.to("#loader", {
  opacity: 0,
  duration: 1,
  delay: 2.2,
});

tl.from("#page1", {
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
  y: 1000,
});

tl.to("#loader", {
  display: "none",
});

tl.from("nav", {
  y: 30,
  opacity: 0,
  duration: 0.4,
  delay: 0.1,
});

tl.from(
  ".hero h1",
  {
    y: 110,
    duration: 0.4,
    delay: 0.2,
    stagger: 0.15,
  },
  "-=0.8"
);
