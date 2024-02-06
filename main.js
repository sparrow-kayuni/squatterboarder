responses = {
    "welcome": {
        response: ["Hello, how can I help you?"]
    },
    "greeting": {
        response: ["Hi, how are you?", "Hello, how are you", "Hello, how can I help you?"]
    },
    "checkup": {
        response: ["I'm doing great! Thanks for asking, I am a chatbot here to help you find accomodation", "I am here to help you find accomodation on and around campus", "Hello, thanks for asking, I am a chatbot here to help you find accomodation at cbu"]
    },
    "lookup": {
        response: ["", "", ""]
    },
    "findspaces": {
        response: ["", "", ""]
    },
    "thinking": {
        response: ["...", "Let me get back to you...", "Processing..."]
    },
    "confused": {
        response: ["Sorry, there seems to be some confusion... I am only a chatbot designed to help you find accomodation space on campus. Try asking me to find nearest boarding house for less that K100 per month", "Sorry, Could you repeat that question? And try asking it in a way that can help me help you find accomodation on campus", "Seems I'm confused. I am a chatbot designed only to help you find boarding spaces in and around campus. Try to ask for the available rooms in the last 24 hours"]
    }
}

const greeting_messages = ["hi", "hello", "hey", "good morning", "how are you"];


const checkup_messages =  ["how are you", "how are you doing", "how is it", "who are you"];

const lookup_messages = ["", "", ""];


const chatContainer = document.getElementById("chat__container");

const messageInput = document.querySelector("#message__input");

const send = document.querySelector("#send__button");


const deleteChat = function(){
    var ok = confirm("Are you sure you want to permanently delete this chat?");
    
    console.log(ok);
    
    if(ok){
        chatContainer.children = [];
    }
    
    // chatContainer.removeChildren();
}

const sendMessage = function(userMessage){
    let userMessageContainer = document.createElement("div");
    userMessageContainer.setAttribute("class", "m-2 d-flex");
    userMessageContainer.setAttribute("style", "justify-content: flex-end; flex-direction: row;")
    
    let userMessageElement = document.createElement("div");
    userMessageElement.setAttribute("class", "user-message-element p-2");
    
    userMessageElement.setAttribute("style", "color: white; text-align: right; width: fit-content");
    
    userMessageElement.innerText = userMessage;
    
    messageInput.value = "";
    userMessageContainer.appendChild(userMessageElement);
    
    chatContainer.appendChild(userMessageContainer);
}


const sendResponse = function(userMessage){
    let responseMessageContainer = document.createElement("div");
    responseMessageContainer.setAttribute("class", "m-2 d-flex");
    responseMessageContainer.setAttribute("style", "justify-content: flex-start; flex-direction: row;")
    
    let responseMessageElement = document.createElement("div");
    responseMessageElement.setAttribute("class", "response-message-element p-2");
    
    responseMessageElement.setAttribute("style", "color: white; text-align: left; width: fit-content");
    
    responseMessageElement.innerText = 
    responses["greeting"].response[0];
    responseMessageContainer.appendChild(responseMessageElement);
    
    chatContainer.appendChild(responseMessageContainer);
}

sendResponse(responses["welcome"].response[0]);

const sendHandler = function(e){
    
    let userMessage = messageInput.value.trim();
    
    if(userMessage == ""){
        alert("Message is empty! Please do not leave the box empty");
    } else {
        sendMessage(userMessage);
        
        setTimeout(function(){
            sendResponse(userMessage);
        }, 100);
    }
    
};

const toggleDropdownMenu = function(e){
    
    const dropdownContainer = document.querySelector(".dropdown-container");
    dropdownContainer.classList.toggle("no-height");
    dropdownContainer.classList.toggle("dropdown-height");
}
