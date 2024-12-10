ScrollTrigger.defaults({
  toggleActions: "play none reverse play",
});
const tl = gsap.timeline();

tl.to(".a", {
  scrollTrigger: {
    trigger: ".a",
    start: "top center",
    end: "bottom 100px",
    scrub: true,
    pin: "#spa_0",
    // markers: true,
  }, opacity: 10,
}).to(".b", {
  scrollTrigger: {
    trigger: ".b",
    start: "top center",
    end: "bottom 100px",
    scrub: true,
    // pin: ".left",
    // markers: true,
  }, opacity: 10,
}).to(".c", {
  scrollTrigger: {
    trigger: ".c",
    start: "top center",
    bottom: "bottom 100px",
    scrub: true,
    // markers: true,
  }, opacity: 10,
}).to(".d", {
  scrollTrigger: {
    trigger: ".d",
    start: "top 45%",
    bottom: "bottom ",
    scrub: true,
    markers: true,
    pin: ".d",
  }, opacity: 0,
})

gsap.to('.right', {
  scrollTrigger: {
    trigger: ".right",
    start: "top 15%%",
    end: "bottom -15px",
    endTrigger: ".d",
    scrub: 1,
    pin: ".desktopPhotos",
    // markers: true,
  },
  opacity: 0, ease: 'power3.in'
})

//Add another cave picture here as a link but also a entrance to the cave which leads to the index.


