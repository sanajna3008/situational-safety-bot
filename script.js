
import { GoogleGenerativeAI } from 
    "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyCaunMTGhqhni-2AXRiBhtfVKqnqBgqTu4"; 
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function handleChat() {
    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let userMessage = input.value.trim();
    if (!userMessage) return;

    chatBox.innerHTML += <div><b>You:</b> ${userMessage}</div>;
    input.value = "";
    
    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: userMessage }] }]
        });

        let aiResponse = result.response.text();
        chatBox.innerHTML += <div><b>AI:</b> ${aiResponse}</div>;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    catch (err) {
        chatBox.innerHTML += <div><b>AI:</b> ❌ Error: Check your API key!</div>;
    }
}  
  

