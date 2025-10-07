const chatOutput = document.getElementById("chatOutput");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

async function getAIResponse(message) {
  const res = await fetch("https://aiva-backend-cp5k.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "Hmm... I didn’t catch that 😅";
}

// append messages to the chat box
function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add(sender === "user" ? "user-message" : "ai-message");
  msg.textContent = text;
  chatOutput.appendChild(msg);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

// when user clicks Ask or presses Enter
async function handleSend() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage("user", `👤 ${message}`);
  userInput.value = "";

  addMessage("ai", "⏳ Thinking...");
  const aiReply = await getAIResponse(message);

  // remove "thinking" message
  chatOutput.lastChild.remove();
  addMessage("ai", `🤖 ${aiReply}`);
}

sendBtn.addEventListener("click", handleSend);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") handleSend();
});