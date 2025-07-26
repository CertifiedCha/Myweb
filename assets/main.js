// 🌙 Theme Toggle
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
      setTimeout(loopType, 2000);
      return;
    }
  } else {
    typeElement.innerHTML = aboutText.slice(0, typeIndex) + '<span class="cursor">|</span>';
    typeIndex--;
    if (typeIndex === 0) isDeleting = false;
  }
  setTimeout(loopType, isDeleting ? 30 : 50);
}

window.onload = () => loopType();

// 🎬 GSAP Animations
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

// 😢 RELAPSE MODE
const relapseBtn = document.getElementById("relapseBtn");
const snapOutBtn = document.getElementById("snapOutBtn");
const relapseCard = document.getElementById("relapseCard");
const music = document.getElementById("relapseMusic");
const relapseVideo = document.getElementById("relapseVideo");
const quoteDisplay = document.getElementById("quoteDisplay");
const recoveryOverlay = document.getElementById("recoveryOverlay");

const quotes = [
  '“Miss ko na siya, guys.” — Darius',
  '“Wala na talaga... pero sana meron pa.”',
  '“Ako na lang ulit, pwede?”',
  '“Iniwan mo man ako, di kita iiwan.”',
  '“Binuhos ko lahat... ikaw lang pala hindi seryoso.”',
  '“Ikaw pa rin hanggang ngayon”',
  '“Kailan mo ba ako papalayain?”',
  '“Kaya pala ayaw nang ayusin kasi may iba na...”',
  '“Kung aantayin kita, may pag-asa pa ba?”',
  "“Bakit naman nang-iwan, kung tayo'y magkaibigan lang?”",
  '“Natatakot kang iwanan kita, pero ikaw pa yung nang-iwan.”',
  '“Miss na miss na kita haha”',
  '“Ansaket talaga pre”',
  '“Sana nababasa mo to”',
  '“Bawat luha ko ikaw ang may dahilan”',
  '“Bakit araw-araw pa kitang napapanaginipan?”',
  '“Bawal na ba?”'
];

let currentIndex = 0;
let quoteInterval = null;

function showNextQuote() {
  quoteDisplay.classList.remove('fade-in');
  void quoteDisplay.offsetWidth;
  quoteDisplay.textContent = quotes[currentIndex];
  quoteDisplay.classList.add('fade-in');
  currentIndex = (currentIndex + 1) % quotes.length;
}

// 🧨 Relapse Button
snapOutBtn.addEventListener("click", () => {
  // Pause music & video
  relapseVideo.pause();
  music.pause();

  // Hide the image card & quote
  relapseCard.classList.remove("show");

  setTimeout(() => {
    relapseCard.classList.add("hidden");
    quoteDisplay.textContent = ""; // 💥 Wipes the text
  }, 500); // allow transition to finish

  // Hide snapout button
  snapOutBtn.classList.add("hidden");

  // Show uplifting overlay message
  recoveryOverlay.classList.remove("hidden");
  recoveryOverlay.classList.add("show");

  // Revert to light theme
  document.documentElement.setAttribute("data-theme", "light");

  // Hide background video
  relapseVideo.classList.remove("show");

  // Stop quote cycle
  clearInterval(quoteInterval);
  quoteInterval = null;

  // Hide overlay after a few secs
  setTimeout(() => {
    recoveryOverlay.classList.remove("show");
    recoveryOverlay.classList.add("hidden");
  }, 4000);
});

