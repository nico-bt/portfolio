gsap.registerPlugin(ScrollTrigger)

const color1 = "-webkit-linear-gradient(0deg, tomato, #fff200, red)"

// Showcase h1
// ---------------------------------------------
gsap.fromTo(
  ".showcase h1",
  { backgroundSize: "-100%", background: "transparent", x: -25 },
  { backgroundSize: "100%", background: color1, duration: 3, x: 0 }
)

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
    onEnter: () =>
      setTimeout(() => {
        addEventsAfterCardsProjectsAnimationComplete()
      }, 3000),
  },
})

// Contact form entrance
// ---------------------------------------------
gsap.set(".form-container", { opacity: 0, scale: 0.5 })
gsap.to(".form-container", {
  opacity: 1,
  scale: 1,
  duration: 2,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 25%",
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
const projectsGrid = document.querySelector(".projects-grid")

// Add hover animations after cards projects had entered
function addEventsAfterCardsProjectsAnimationComplete() {
  projectCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      gsap.to(".card", { opacity: 0.3, duration: 0, zIndex: 1 })
      gsap.to(card, {
        scale: 1.06,
        duration: 0,
        opacity: 1,
        zIndex: 10,
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(".card", { opacity: 1, duration: 0 })
      gsap.to(card, { scale: 1, duration: 0.05 })
    })
  })
}

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
