gsap.registerPlugin(ScrollTrigger)

// Tools animation
// ---------------------------------------------
gsap.to(".tools", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".tools-container",
    start: "top 20%",
    // markers: true,
  },
})
gsap.to(".tools-card", {
  opacity: 1,
  y: 0,
  duration: 0.01,
  stagger: 0.14,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".tools-container",
    start: "top 20%",
    ease: "bounce",
  },
})

// Projects menu entrance
// ---------------------------------------------
gsap.set(".projects-menu", { opacity: 0 })
gsap.to(".projects-menu", {
  opacity: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".projects-menu",
    start: "top 20%",
  },
})

// Projects cards animation
// ---------------------------------------------
gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 0.1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".projects-menu",
    start: "top 20%",
  },
})

// Reemplazando las animaciones hover en css porque entran en conflicto con GSAP
// ----------------------------------------------------------------------------------
// Select the element
const toolCards = document.querySelectorAll(".tools-card")

// Add hover animation
toolCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { y: -15, duration: 0.05 })
  })

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { y: 0, duration: 0.05 })
  })
})

// Select the element
const projectCards = document.querySelectorAll(".card")

// Add hover animation
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.04, zIndex: 10, duration: 0.05 })
  })

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, zIndex: 1, duration: 0.05 })
  })
})

// Feed your mind modal
const livePrjBtn = document.querySelector("#feed-your-mind-liveBtn")
const modal = document.querySelector("#feed-your-mind-modal")
const modalBtn = document.querySelector("#feed-your-mind-modal-btn")

livePrjBtn.addEventListener("click", () => {
  modal.style.display = "block"
})

modalBtn.addEventListener("click", () => {
  modal.style.display = "none"
})
