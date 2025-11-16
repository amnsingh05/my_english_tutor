/* LOGIN CHECK */
const user = JSON.parse(localStorage.getItem("userData"));
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn || !user) window.location.href = "login.html";
document.getElementById("usernameDisplay").textContent = user.name + " ▼";

/* PROFILE MENU */
const profileBtn = document.querySelector(".profile-btn");
const profileMenu = document.querySelector(".profile-menu");

profileBtn.onclick = () => profileMenu.classList.toggle("show");

document.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.classList.remove("show");
  }
});

/* LOGOUT */
document.getElementById("logoutBtn").onclick = () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
};


/* ---------------- SENTENCE GENERATOR ---------------- */
const sentences = {
  easy: [
    "I wake up early every morning.",
    "She loves eating ice cream.",
    "They study English every day."
  ],
  medium: [
    "I enjoy traveling to new places and meeting different people.",
    "My goal this year is to improve my speaking fluency.",
    "Technology has changed the way we learn languages."
  ],
  hard: [
    "Effective communication requires clarity, confidence, and emotional intelligence.",
    "Artificial intelligence is transforming global education at an incredible pace.",
    "Public speaking skills significantly influence professional growth and leadership."
  ]
};

document.getElementById("generateSentenceBtn").onclick = () => {
  const level = document.getElementById("difficultySelect").value;
  const random = sentences[level][Math.floor(Math.random() * sentences[level].length)];
  
  document.getElementById("sentenceText").textContent = random;

  // Generate TTS Audio
  const audio = document.getElementById("sentenceAudio");
  const speech = new SpeechSynthesisUtterance(random);
  speech.lang = "en-US";
  speech.rate = 0.95;

  speechSynthesis.speak(speech);

  // Optional: play after TTS ends
  setTimeout(() => {
    const tts = new SpeechSynthesisUtterance(random);
    window.speechSynthesis.speak(tts);
  }, 1000);
};


/* ---------------- SHADOW MODE ---------------- */
document.getElementById("startShadowBtn").onclick = () => {
  document.getElementById("shadowInstructions").style.display = "block";
  const sentence = document.getElementById("sentenceText").textContent;

  const repeatSpeech = new SpeechSynthesisUtterance(sentence);
  repeatSpeech.lang = "en-US";
  repeatSpeech.rate = 0.9;

  speechSynthesis.speak(repeatSpeech);
};
