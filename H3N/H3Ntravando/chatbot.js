let perguntasRespostas = {
  "oi": "Olá, como posso ajudar?",
  "qual é o seu nome?": "Meu nome é Chatbot",
  "como você está?": "Estou bem, obrigado por perguntar!",
  "qual é o sentido da vida?": "Essa é uma pergunta difícil! Acredito que a resposta esteja relacionada à busca pela felicidade e propósito pessoal.",
  "você é inteligente?": "Eu fui programado para ajudar, então acredito que sou útil para muitas pessoas.",
  "obrigado": "Por nada, estou aqui para ajudar!",
  "tchau": "Até logo, espero ter ajudado!"
};

function generateResponse(message) {
  let response = perguntasRespostas[message.toLowerCase()];
  if (response) {
    return response;
  } else {
    return "Desculpe, não entendi. Pode repetir, por favor?";
  }
}

let chatHistory = document.getElementById("chat-history");
let chatMessage = document.getElementById("chat-message");
let chatSend = document.getElementById("chat-send");
let chatInput = document.getElementById("chat-input");

chatSend.addEventListener("click", function() {
  let message = chatMessage.value;
  let response = generateResponse(message);
  chatHistory.innerHTML += "<p><strong>Você:</strong> " + message + "</p>";
  chatHistory.innerHTML += "<p><strong>Chatbot:</strong> " + response + "</p>";
  chatMessage.value = "";
  chatInput.scrollIntoView();
});

chatMessage.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    chatSend.click();
  }
});

chatInput.scrollIntoView();
