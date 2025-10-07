async function getAIResponse(message) {
  const res = await fetch("https://aiva-backend-cp5k.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  console.log("AIVA says:", data.choices[0].message.content);
  return data.choices[0].message.content;
}

getAIResponse("Hello AIVA!");