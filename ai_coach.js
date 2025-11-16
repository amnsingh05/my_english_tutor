const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender === "user" ? "user-msg" : "ai-msg");
  msg.textContent = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  let text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  // AI reply placeholder
  setTimeout(() => {
    addMessage("Thanks! I will help you with that.", "ai");
  }, 600);
});
