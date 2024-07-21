function page1Animation() {
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

  tl.from(
    "#container .containerL h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.7,
      ease: "power1.out",
    },
    "-=0.3"
  );

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

  tl.from(
    "#companyLogos img",
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power1.out",
      stagger: 0.1,
    },
    "-=0.5"
  );
}

page1Animation();

var tl2 = gsap.timeline({});

tl2.from("#services h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#services h1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});

tl2.from("#services p", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#services h1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});

tl2.from("#servicesContainer .s1", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#servicesContainer .s1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});

tl2.from("#servicesContainer .s2", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#servicesContainer .s2",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});

tl2.from("#servicesContainer .s3", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#servicesContainer .s3",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});

tl2.from("#servicesContainer .s4", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#servicesContainer .s4",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 40%",
    scrub: 1,
  },
});

var tl3 = gsap.timeline();

tl3.from("#page3 #page3Container", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#page3 #page3Container",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 1,
  },
});

tl3.from("#caseStudy h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#caseStudy h1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});

tl3.from("#caseStudy p", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#caseStudy h1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});

tl3.from("#caseStudyLinks", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#caseStudyLinks",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});

tl3.from("#caseStudyLinks .linkdiv", {
  x: -20,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#caseStudyLinks .linkdiv",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});
