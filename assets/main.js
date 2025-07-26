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

// ⌨️ Looping Typewriter Effect
const aboutText = "Yo! I'm Darius — a student, builder, and tech enthusiast. I love turning coffee and ideas into working projects.";
let typeIndex = 0;
let isDeleting = false;
const typeElement = document.getElementById("typewriter");

function loopType() {
  if (!isDeleting) {
    typeElement.innerHTML = aboutText.slice(0, typeIndex) + '<span class="cursor">|</span>';
    typeIndex++;
    if (typeIndex > aboutText.length) {
      isDeleting = true;
      setTimeout(loopType, 2000); // pause at end
      return;
    }
  } else {
    typeElement.innerHTML = aboutText.slice(0, typeIndex) + '<span class="cursor">|</span>';
    typeIndex--;
    if (typeIndex === 0) {
      isDeleting = false;
    }
  }

  setTimeout(loopType, isDeleting ? 30 : 50);
}

window.onload = () => {
  loopType();
};

// 🎬 Animations
gsap.from("header", { y: -80, duration: 1, opacity: 0 });
gsap.from(".card", {
  stagger: 0.2,
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power2.out",
});
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
