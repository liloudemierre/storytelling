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
  .to(".beach-image", {
    ease: "sine.inOut",
    scale: "20",
    x: "720%",
    duration: 7,
    delay: "10",
  })
  .to(".beach-text", { x: "1000%", duration: 7, delay: "-7" })
  .to(".bird", { opacity: "0" });

// Séquence 2
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".tourists",
    start: "top top",
    end: "bottom+=200% top",
    pin: true,
    scrub: 1,
    markers: false,
  },
});

tl2
  .to(".tourists-text", { ease: "sine.inOut", opacity: "100", duration: "3" })
  .to(".grass-right", { x: "-100%", duration: "2" })
  .to(".grass-left", { x: "100%", duration: "2" }, "-=2")
  .to(".tourists-right", { x: "-110%", duration: "4" }, "-=2")
  .to(".tourists-left", { x: "120%", duration: "4" }, "-=4")
  .to(".tourists-text", { duration: 2, ease: "sine.inOut", opacity: "0" })
  .to(".grass-right, .tourists-right", { x: "110%", duration: "3" })
  .to(".grass-left, .tourists-left", { x: "-120%" }, "-=3");

// Séquence 3
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".castle",
    start: "top top",
    end: "bottom+=800% top",
    pin: true,
    scrub: 2,
    markers: false,
  },
});

tl3
  .to(".castle-text", { ease: "sine.inOut", opacity: "100", duration: "3" })
  .to(".castle-image", { y: "-140%", duration: 10 })
  .to(".castle-phrase", { y: "-200%", duration: "5" }, "-=5")
  .to(".castle-image", { y: "-290%", duration: 10 })
  .to(".castle-image castle-text", { opacity: "0" });

// Vidéo
const videoContainer = document.querySelector(".container.video");
const video = document.querySelector("#Video");

ScrollTrigger.create({
  trigger: ".sequence-1",
  start: "bottom bottom",
  markers: true,
  id: "Video",
  onEnter: () => {
    videoContainer.classList.add("video-visible");
    video.play();
  },
  onLeave: () => {
    videoContainer.classList.remove("video-visible");
    video.pause();
  },
  onEnterBack: () => video.play(),
  onLeaveBack: () => video.pause(),
});

video.addEventListener("ended", () => {
  // Supprimer les anciens triggers
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // Passer à la séquence suivante
  document.querySelector(".sequence-1").classList.remove("visible");
  document.querySelector(".sequence-2").classList.add("visible");

  // Recalcul du scroll
  ScrollTrigger.refresh();
  //   === Création du trigger pour la séquence 2 (issue) ===
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".issue",
      start: "top top",
      end: "bottom+=200% top",
      pin: true,
      scrub: 5,
      markers: false,
    },
  });

  tl4
    .to(".issue-soleil", { x: "100%", y: "-190%", duration: "5" })
    .to(".issue-text", { x: "-30%", y: "430%", duration: "1" }, "-=5")
    .to(".issue", {
      scale: 20, // zoom de la "caméra"
      x: "-380%", // ajuster pour centrer sur le soleil
      y: "780%",
      transformOrigin: "center center",
      duration: 5,
    })
    .to(".issue-image", { opacity: "0" })
    .to(".horizontal", {
      opacity: "100",
      ease: "sine.inOut",
      duration: "2",
    });
});
