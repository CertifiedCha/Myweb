// Core elements
const relapseBtn = document.getElementById("relapseBtn");
const snapOutBtn = document.getElementById("snapOutBtn");
const relapseCard = document.getElementById("relapseCard");
const music = document.getElementById("relapseMusic");
const relapseVideo = document.getElementById("relapseVideo");
const quoteDisplay = document.getElementById("quoteDisplay");
const recoveryOverlay = document.getElementById("recoveryOverlay");

// Quotes
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
  '“Bawat ng luha ko ikaw ang may dahilan”',
  '“Bakit araw-araw pa kitang napapanaginipan?”',
  '“Bawal na ba?”'
];

let currentIndex = 0;

function showNextQuote() {
  quoteDisplay.classList.remove('fade-in');
  void quoteDisplay.offsetWidth; // restart animation
  quoteDisplay.textContent = quotes[currentIndex];
  quoteDisplay.classList.add('fade-in');
  currentIndex = (currentIndex + 1) % quotes.length;
}

// 🫠 RELAPSE MODE
relapseBtn.addEventListener("click", () => {
  // Show relapse content
  relapseCard.classList.remove("hidden");

  // Set dark theme
  document.documentElement.setAttribute("data-theme", "dark");

  // Play video
  relapseVideo.classList.add("show");
  relapseVideo.play().catch(err => console.error("Video error:", err));

  // Play music
  music.volume = 0.2;
  music.muted = false;
  music.play().catch(err => console.error("Music error:", err));

  // Start quote cycle
  showNextQuote();
  setInterval(showNextQuote, 5000);

  // Animate card
  setTimeout(() => {
    relapseCard.classList.add("show");

    // Show snap out button
    snapOutBtn.classList.remove("hidden");
  }, 300);
});

// 🧼 SNAP OUT MODE
snapOutBtn.addEventListener("click", () => {
  // Pause music & video
  music.pause();
  relapseVideo.pause();

  // Show message
  recoveryOverlay.classList.remove("hidden");
  recoveryOverlay.classList.add("show");

  // Switch to light mode
  document.documentElement.setAttribute("data-theme", "light");

  // Clean UI after delay
  setTimeout(() => {
    recoveryOverlay.classList.remove("show");
    relapseCard.classList.add("hidden");
    relapseVideo.classList.remove("show");
    snapOutBtn.classList.add("hidden");
  }, 4000);
});
