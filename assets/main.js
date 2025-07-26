// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 🌙 Dark Mode Toggle
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}

// 💬 Modal Contact
const modal = document.getElementById("contactModal");
function openModal() {
  modal.style.display = "flex";
}
window.onclick = function (e) {
  if (e.target === modal) modal.style.display = "none";
};

// ⌨️ Typewriter Effect
const aboutText = "Yo! I'm Darius — a student, builder, and tech enthusiast. I love turning coffee and ideas into working projects.";
let index = 0;
function typeWriter() {
  if (index < aboutText.length) {
    document.getElementById("typewriter").innerHTML += aboutText.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = () => {
  typeWriter();
};

// 🎬 Header Animation
gsap.from("header", {
  y: -80,
  duration: 1,
  opacity: 0,
  ease: "power2.out"
});

// 🧩 Card Reveal Animation
gsap.from(".card", {
  stagger: 0.2,
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power2.out"
});

// 📡 Scroll-triggered section animation
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});
