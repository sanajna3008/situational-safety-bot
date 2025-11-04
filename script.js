function getResponse() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const outputDiv = document.getElementById("output");
    let response = "";

    if (input.includes("fire")) {
        response = "Stay calm! Evacuate immediately and call 101 (Fire emergency).";
    } 
    else if (input.includes("earthquake")) {
        response = "Drop, Cover, and Hold on! Stay away from windows and heavy objects.";
    } 
    else if (input.includes("stranger")) {
        response = "Stay alert! Avoid talking to strangers and move to a safe area.";
    } 
    else if (input.includes("online safety")) {
        response = "Never share personal information online and avoid clicking unknown links.";
    } 
    else if (input.includes("help")) {
        response = "You can ask me about safety during fire, earthquake, stranger danger, or online safety.";
    } 
    else {
        response = "I'm not sure about that. Please ask about fire, earthquake, stranger, or online safety.";
    }

    // Display the chatbot's response in the output area
    outputDiv.innerHTML = response;
}