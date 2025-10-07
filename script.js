async function getAIResponse(message) {
  const res = await fetch("https://aiva-backend-cp5k.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
