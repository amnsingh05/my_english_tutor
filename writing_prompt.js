const prompts = [
  "Describe a moment that changed your life.",
  "If you could travel anywhere tomorrow, where would you go and why?",
  "Write about a challenge you overcame.",
  "Describe your dream job in detail.",
  "What habit improved your life the most?",
  "Write a story that begins with: “I never expected this to happen...”",
  "Describe someone you admire and why.",
  "What does success mean to you?",
  "Describe a time when you felt truly confident.",
  "If you could give advice to your younger self, what would it be?"
];

const promptText = document.getElementById("promptText");
const writingBox = document.getElementById("writingBox");
const newPromptBtn = document.getElementById("newPromptBtn");

/* Load Daily Prompt */
function loadPrompt() {
  const random = Math.floor(Math.random() * prompts.length);
  promptText.textContent = prompts[random];
}
loadPrompt();

newPromptBtn.onclick = loadPrompt;

/* Save Writing */
document.getElementById("saveBtn").onclick = () => {
  localStorage.setItem("savedWriting", writingBox.value);
  alert("Your writing has been saved!");
};

/* Load saved writing */
writingBox.value = localStorage.getItem("savedWriting") || "";

/* Download Writing */
document.getElementById("downloadBtn").onclick = () => {
  const text = writingBox.value;
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "writing_prompt.txt";
  a.click();
};

/* Clear Writing */
document.getElementById("clearBtn").onclick = () => {
  writingBox.value = "";
};
