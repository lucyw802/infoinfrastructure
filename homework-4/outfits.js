document.getElementById("start").addEventListener("click", startoutfitselection);

let outfitChoices = [];

function startoutfitselection() {
    document.getElementById("start").style.display = "none";  
    pickHat();
}

function showOptions(question, options, nextStep) {
    let gameDiv = document.getElementById("game");
    gameDiv.innerHTML = "";
   
let prompt = document.createElement ("h2");
prompt.innerText = question;
gameDiv.appendChild(prompt);

options.forEach(option => {
    let button = document.createElement("button");
    button.innerText = option.text;
    button.onclick = function () {
        outfitChoices.push(option.type);
        nextStep();
    };
gameDiv.appendChild(button);
});
}

function pickHat() {
    showOptions ("Pick your hat:", 
    [ 
        {text: "Stylish beret", type: "good"},
        {text: "Cringe fedora", type: "cringe"},
        {text: "Cool cap", type: "good"}
    ], pickShirt);
}

function pickShirt() {
    showOptions ("Pick your shirt:", 
    [ 
        {text: "Stylish stripes", type: "good"},
        {text: "Cringe dirty T-shirt", type: "cringe"},
        {text: "Cool Button-up", type: "good"}
    ], pickPants);
}

function pickPants() {
    showOptions ("Pick your pants:", 
    [ 
        {text: "Stylish pants", type: "good"},
        {text: "Cringe dirty underwear", type: "cringe"},
        {text: "Cool jeans", type: "good"}
    ], pickShoes);
}

function pickShoes() {
    showOptions ("Pick your Shoes:", 
    [ 
        {text: "Stylish slides", type: "good"},
        {text: "Cringe broken flip flops", type: "cringe"},
        {text: "Cool sneakers", type: "good"}
    ], confirmOutfit);
}

function confirmOutfit() {
    let gameDiv = document.getElementById("game")
    gameDiv.innerHTML = "";
   let prompt = document.createElement("h2");
   prompt.innerText = "Are you sure your outfit is fly? :/"
   gameDiv.appendChild(prompt);

   let yesButton = document.createElement("button");
   yesButton.innerText = "Yes super fly! Definately NOT cringe!"
   yesButton.onclick = function () {
    showFinalOutcome();
   };
   gameDiv.appendChild(yesButton);

   let noButton = document.createElement("button");
   noButton.innerText = "No, I want to change something!";
   noButton.onclick = function () {
    restartGame();
   };
   gameDiv.appendChild(noButton);
}

function showFinalOutcome() {
    let gameDiv = document.getElementById("game");
    gameDiv.innerHTML = "";
    let cringeCount = outfitChoices.filter(choice => choice === "cringe").length;
    let message = document.createElement("h2");
    message.innerText = (cringeCount > 0) ?
    "Your outfit SUCKS! You are NOT invited to my birthday party >:[ " : 
        "Nice outfit! You've got style!";
    gameDiv.appendChild(message);
showResetButton();
}

function restartGame() {
    outfitChoices = [];
    document.getElementById("start").style.display = "block";
    document.getElementById("game").innerHTML = ""; 

}

function showResetButton() {
    let gameDiv = document.getElementById("game");
    let resetButton = document.createElement("button");
    resetButton.innerText = "I want to play again!";
    resetButton.onclick = function () {
        restartGame();
    };
    gameDiv.appendChild(resetButton);
}