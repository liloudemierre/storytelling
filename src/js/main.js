import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Séquence 1
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".bird",
    start: "top top",
    end: "bottom+=800% top",
    pin: true,
    scrub: 1,
    markers: false,
  },
});

tl.to(".bird-image", { x: "350%", y: "-250%", duration: 6, ease: "none" })
  .to(".beach-image", { y: "-95%", duration: 6, ease: "none" }, "+=5")
  .to(".beach-text", { ease: "sine.inOut", opacity: "100", duration: 7 }, "+=2")
  .to(".beach-image", { scale: "20", x: "720%", duration: 7, delay: "10" })
  .to(".beach-text", { x: "1000%", duration: 7, delay: "-7" })
  .to(".bird", { opacity: "0" });

// Séquence 2
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".tourists",
    start: "top top",
    end: "bottom+=800% top",
    pin: true,
    scrub: 2,
    markers: false,
  },
});

tl2
  .to(".tourists-text", { ease: "sine.inOut", opacity: "100", duration: "3" })
  .to(".grass-right", { x: "-100%", duration: "3" })
  .to(".grass-left", { x: "100%", duration: "3" }, "-=3")
  .to(".tourists-right", { x: "-110%", duration: "3" }, "-=3")
  .to(".tourists-left", { x: "120%", duration: "3" }, "-=3")
  .to(".tourists-text", { duration: 2, ease: "sine.inOut", opacity: "0" })
  .to(".grass-right, .tourists-right", { x: "110%", duration: "2" })
  .to(".grass-left, .tourists-left", { x: "-120%" }, "-=2");
