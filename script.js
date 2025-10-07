const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatOutput = document.getElementById("chatOutput");

sendBtn.addEventListener("click", handleInput);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleInput();
});

function handleInput() {
  const topic = userInput.value.trim();
  if (!topic) return;

  // Display user message
  addMessage(topic, "user");

  // Clear input
  userInput.value = "";

  // Simulate AI thinking
  setTimeout(() => generateAIResponse(topic), 600);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add(sender === "user" ? "user-message" : "ai-message");
  div.textContent = text;
  chatOutput.appendChild(div);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

function generateAIResponse(topic) {
  const explanations = [
    `Here’s a quick breakdown of ${topic}: It’s all about how one idea connects to another in real life.`,
    `The concept of ${topic} is super important because it helps us understand how systems interact.`,
    `${topic} can be understood in simple terms — think of it as a process that balances inputs and outputs.`,
  ];

  const flashcards = [
    `1️⃣ What’s the main purpose of ${topic}?\n2️⃣ Can you name one real-world example?\n3️⃣ Why is it important to learn about it?`,
    `1️⃣ What problem does ${topic} solve?\n2️⃣ Who uses it?\n3️⃣ What would happen if it didn’t exist?`,
  ];

  const creativePrompts = [
    `🎨 Creative Task: Draw or describe how ${topic} works in real life.`,
    `💡 Creative Challenge: Imagine you had to explain ${topic} to a 5-year-old — how would you do it?`,
    `🧠 Creative Mission: Build a short story around ${topic} in one paragraph.`,
  ];

  const randomExplanation =
    explanations[Math.floor(Math.random() * explanations.length)];
  const randomFlashcard =
    flashcards[Math.floor(Math.random() * flashcards.length)];
  const randomCreative =
    creativePrompts[Math.floor(Math.random() * creativePrompts.length)];

  const finalResponse = `${randomExplanation}\n\n📘 Quick Quiz:\n${randomFlashcard}\n\n${randomCreative}`;

  addMessage(finalResponse, "ai");
}