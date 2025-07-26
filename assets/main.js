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

const relapseBtn = document.getElementById("relapseBtn");
const relapseCard = document.getElementById("relapseCard");
const music = document.getElementById("relapseMusic");
const relapseVideo = document.getElementById("relapseVideo");
const quoteDisplay = document.getElementById("quoteDisplay");

const quotes = [
  '“Miss ko na siya, guys.” — Darius',
  '“Wala na talaga... pero sana meron pa.”',
  '“Ako na lang ulit, pwede?”',
  '“Iniwan mo man ako, di kita iiwan.”',
  '“Binuhos ko lahat... ikaw lang pala hindi seryoso.”',
  '“Ikaw pa rin hanggang ngayon”',
  '“Kailan mo ba ako papalayain?”'
];

let currentIndex = 0;

function showNextQuote() {
  quoteDisplay.classList.remove('fade-in');

  // Force reflow to reset animation
  void quoteDisplay.offsetWidth;

  quoteDisplay.textContent = quotes[currentIndex];
  quoteDisplay.classList.add('fade-in');

  currentIndex = (currentIndex + 1) % quotes.length;
}

relapseBtn.addEventListener("click", () => {
  // Show relapse card
  relapseCard.classList.remove("hidden");
  setTimeout(() => {
    relapseCard.classList.add("show");

    // Theme goes dark
    document.documentElement.setAttribute("data-theme", "dark");

    // Show background video
    relapseVideo.classList.add("show");
    relapseVideo.play().catch(err => console.error("Video error:", err));

    // Show first quote & cycle them
    showNextQuote();
    setInterval(showNextQuote, 5000);
  }, 100);

  // Start music
  music.volume = 0.2;
  music.muted = false;
  music.play().catch(err => console.error("Music error:", err));
});

