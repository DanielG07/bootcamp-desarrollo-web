//Como se hizo en el bootcamp
var userScore = 0;
var computerScore = 0;
const Rock = document.getElementById("r");
const Paper = document.getElementById("p");
const Scissors = document.getElementById("s");
const Score = document.getElementById("score");
const Message = document.getElementById("message");

const Elecciones = {
    "r" : "rock",
    "s" : "scissors",
    "p" : "paper"
}

function getComputerChoice(){
    const Choices = ["r", "p", "s"];
    let eleccion = Math.floor(Math.random() * 3);
    return Choices[eleccion];
}

function lose(computerChoice){
    Message.innerHTML = Message.innerHTML = `Computer chose ${Elecciones[computerChoice]}, so you lost :(`;
    computerScore++;
}

function win(computerChoice){
    userScore++;
    Message.innerHTML = `Computer chose ${Elecciones[computerChoice]}, you winned!`;
}

function draw(computerChoice){
    Message.innerHTML = `Computer chose ${Elecciones[computerChoice]}, its seems like a draw`;
    
}

function updateScore(){
    Score.innerHTML = userScore + ":" + computerScore;
}

function changeColor(HTMLElement, result){
    HTMLElement.className = "choice " + result; 
    setTimeout(() => {
        HTMLElement.className = "choice";
    }, 1000)
}

function game(userChoice, element){
    let computerChoice = getComputerChoice()
    switch(userChoice + computerChoice){
        case "ps":
        case "sr":
        case "rp":
            lose(computerChoice);
            changeColor(element, "lose");
            break;

        case "sp":
        case "rs":
        case "pr":
            win(computerChoice);
            changeColor(element, "win");
            break;

        case "ss":
        case "rr":
        case "pp":
            draw(computerChoice);
            changeColor(element, "draw");
            break;
    }
    updateScore()
    
}

Rock.addEventListener("click", function(){
    game("r", this);
})

Scissors.addEventListener("click", function(){
    game("s", this);
})

Paper.addEventListener("click", function(){
    game("p", this);
})
