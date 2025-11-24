// import { gsap } from "gsap";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // Séquence 1 : Bird
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".bird",
//     start: "top top",
//     end: "bottom+=800% top",
//     pin: true,
//     scrub: 1,
//   },
// });

// tl.to(".bird-image", { x: "350%", y: "-250%", duration: 6, ease: "none" })
//   .to(".beach-image", { y: "-95%", duration: 6, ease: "none" }, "+=5")
//   .to(".beach-text", { opacity: 1, duration: 7, ease: "sine.inOut" }, "+=2")
//   .to(".beach-image", {
//     scale: 20,
//     x: "720%",
//     duration: 7,
//     ease: "sine.inOut",
//     delay: 10,
//   })
//   .to(".beach-text", { x: "1000%", duration: 7, delay: -7 })
//   .to(".bird", { opacity: 0 });

// // Séquence 2 : Tourists
// const tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".tourists",
//     start: "top top",
//     end: "bottom+=200% top",
//     pin: true,
//     scrub: 1,
//   },
// });

// tl2
//   .to(".tourists-text", { opacity: 1, duration: 3, ease: "sine.inOut" })
//   .to(".grass-right", { x: "-100%", duration: 2 })
//   .to(".grass-left", { x: "100%", duration: 2 }, "-=2")
//   .to(".tourists-right", { x: "-110%", duration: 4 }, "-=2")
//   .to(".tourists-left", { x: "120%", duration: 4 }, "-=4")
//   .to(".tourists-text", { opacity: 0, duration: 2, ease: "sine.inOut" })
//   .to(".grass-right, .tourists-right", { x: "110%", duration: 3 })
//   .to(".grass-left, .tourists-left", { x: "-120%" }, "-=3");

// // Séquence 3 : Castle
// const tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".castle",
//     start: "top top",
//     end: "bottom+=200% top",
//     pin: true,
//     scrub: true,
//   },
// });

// tl3
//   .to(".castle-text", { opacity: 1, duration: 3, ease: "sine.inOut" })
//   .to(".castle-image", { y: "-140%", duration: 10 })
//   .to(".castle-phrase", { y: "-200%", duration: 5 }, "-=5")
//   .to(".castle-image", { y: "-290%", duration: 10 });

// // Vidéo
// const videoContainer = document.querySelector(".container.video");
// const video = document.querySelector("#Video");

// tl3.call(() => {
//   // Lancer la vidéo
//   videoContainer.classList.add("video-visible");
//   video.currentTime = 0;
//   video.play();
// });
// const buttonWhite = document.querySelector(".btn.white");
// const buttonBlack = document.querySelector(".btn.black");
// video.addEventListener("ended", () => {
//   videoContainer.classList.remove("video-visible");

//   buttonWhite.classList.remove("visible");
//   buttonBlack.classList.add("visible");

//   gsap.to(window, { duration: 2, scrollTo: ".issue" });
// });

// // Séquence Issue
// const tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".issue",
//     start: "top top",
//     end: "bottom+=200% top",
//     pin: true,
//     scrub: true,
//   },
// });

// tl4
//   .to(".issue-sun", { x: "100%", y: "-190%", duration: 5 })
//   .to(".issue-text", { x: "-30%", y: "430%", duration: 1 }, "-=5")
//   .to(".issue", {
//     scale: 20,
//     x: "-380%",
//     y: "780%",
//     transformOrigin: "center center",
//     duration: 5,
//   })
//   .to(".issue", { opacity: 0 });

// // Séquence Horizontal
// const tl5 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".horizontal",
//     start: "top top",
//     end: "bottom+=200% top",
//     pin: true,
//     scrub: 2,
//   },
// });

// tl5
//   .to(".horizontal-image", { x: "-50%", ease: "none" })
//   .to(".horizontal-image", { opacity: 0 });

// // Séquence Faces
// const tl6 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".faces",
//     start: "top top",
//     end: "bottom+=400% top",
//     pin: true,
//     scrub: 1,
//   },
// });

// tl6
//   .fromTo(
//     ".face-top",
//     { y: "-100%", x: "-20%" },
//     { y: "0%", x: "0%", duration: 3 },
//     "<"
//   )
//   .fromTo(
//     ".face-bottom",
//     { y: "100%", x: "20%" },
//     { y: "0%", x: "0%", duration: 3 },
//     "<"
//   )
//   .to(".face-top", { y: "-100%", x: "-20%", duration: 1.5 }, "+=0.5")
//   .to(".face-bottom", { y: "100%", x: "20%", duration: 1.5 }, "<")
//   .to(".faces-text", { opacity: 1, duration: 3 })
//   .to(".faces-text", { opacity: 0, duration: 1 })
//   .to(".bd-cover", { x: "220%" })
//   .to(
//     ".bd-text > div",
//     { x: "85vw", duration: 2, ease: "power3.out", stagger: 0.3 },
//     "<"
//   );
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Séquence 1 : Bird
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".bird",
    start: "top top",
    end: "bottom+=800% top",
    pin: true,
    scrub: 1,
  },
});

tl.to(".bird-image", { x: "350%", y: "-250%", duration: 6, ease: "none" })
  .to(".beach-image", { y: "-95%", duration: 6, ease: "none" }, "+=5")
  .to(".beach-text", { opacity: 1, duration: 7, ease: "sine.inOut" }, "+=2")
  .to(".beach-image", {
    scale: 20,
    x: "720%",
    duration: 7,
    ease: "sine.inOut",
    delay: 10,
  })
  .to(".beach-text", { x: "1000%", duration: 7, delay: -7 })
  .to(".bird", { opacity: 0 });

// Séquence 2 : Tourists
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".tourists",
    start: "top top",
    end: "bottom+=200% top",
    pin: true,
    scrub: 1,
  },
});

tl2
  .to(".tourists-text", { opacity: 1, duration: 3, ease: "sine.inOut" })
  .to(".grass-right", { x: "-100%", duration: 2 })
  .to(".grass-left", { x: "100%", duration: 2 }, "-=2")
  .to(".tourists-right", { x: "-110%", duration: 4 }, "-=2")
  .to(".tourists-left", { x: "120%", duration: 4 }, "-=4")
  .to(".tourists-text", { opacity: 0, duration: 2, ease: "sine.inOut" })
  .to(".grass-right, .tourists-right", { x: "110%", duration: 3 })
  .to(".grass-left, .tourists-left", { x: "-120%" }, "-=3");

// Séquence 3 : Castle
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".castle",
    start: "top top",
    end: "bottom+=200% top",
    pin: true,
    scrub: true,
  },
});

tl3
  .to(".castle-text", { opacity: 1, duration: 3, ease: "sine.inOut" })
  .to(".castle-image", { y: "-140%", duration: 10 })
  .to(".castle-phrase", { y: "-200%", duration: 5 }, "-=5")
  .to(".castle-image", { y: "-290%", duration: 10 });

// === Vidéo ===
const videoContainer = document.querySelector(".container.video");
const video = document.querySelector("#Video");

// === Boutons ===
const buttonWhite = document.querySelector(".btn.white");
const buttonBlack = document.querySelector(".btn.black");

// Bouton blanc visible au début, bouton noir caché
buttonWhite.classList.add("visible");
buttonBlack.classList.remove("visible");

// Quand la vidéo commence → cacher tous les boutons
tl3.call(() => {
  videoContainer.classList.add("video-visible");
  video.currentTime = 0;
  video.play();

  buttonWhite.classList.remove("visible");
  buttonBlack.classList.remove("visible");
});

// Quand la vidéo est terminée → afficher bouton noir seulement
video.addEventListener("ended", () => {
  videoContainer.classList.remove("video-visible");

  buttonWhite.classList.remove("visible");
  buttonBlack.classList.add("visible");

  gsap.to(window, { duration: 2, scrollTo: ".issue" });
});

// Séquence Issue
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".issue",
    start: "top top",
    end: "bottom+=200% top",
    pin: true,
    scrub: true,
  },
});

tl4
  .to(".issue-sun", { x: "100%", y: "-190%", duration: 5 })
  .to(".issue-text", { x: "-30%", y: "430%", duration: 1 }, "-=5")
  .to(".issue", {
    scale: 20,
    x: "-380%",
    y: "780%",
    transformOrigin: "center center",
    duration: 5,
  })
  .to(".issue", { opacity: 0 });

// Séquence Horizontal
const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal",
    start: "top top",
    end: "bottom+=200% top",
    pin: true,
    scrub: 2,
  },
});

tl5
  .to(".horizontal-image", { x: "-50%", ease: "none" })
  .to(".horizontal-image", { opacity: 0 });

// Séquence Faces
const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".faces",
    start: "top top",
    end: "bottom+=400% top",
    pin: true,
    scrub: 1,
  },
});

tl6
  .fromTo(
    ".face-top",
    { y: "-100%", x: "-20%" },
    { y: "0%", x: "0%", duration: 3 },
    "<"
  )
  .fromTo(
    ".face-bottom",
    { y: "100%", x: "20%" },
    { y: "0%", x: "0%", duration: 3 },
    "<"
  )
  .to(".face-top", { y: "-100%", x: "-20%", duration: 1.5 }, "+=0.5")
  .to(".face-bottom", { y: "100%", x: "20%", duration: 1.5 }, "<")
  .to(".faces-text", { opacity: 1, duration: 3 }, "-=2")
  .to(".faces-text", { opacity: 0, duration: 1 })
  .to(".black", { opacity: 0, duration: 1 })
  .to(".bd-cover", { x: "220%" })
  .to(
    ".bd-text > div",
    { x: "85vw", duration: 2, ease: "power3.out", stagger: 0.3 },
    "<"
  );
