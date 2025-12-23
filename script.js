function getComputerChoice() {
    result = Math.floor(Math.random()*3) + 1;
    let comp = document.querySelector("#computer");

    if(result == 1) {
        comp.textContent = "I play rock";
    }
    else if (result == 2) {
        comp.textContent = "I play paper";
    }
    else {
        comp.textContent = "I play scissors";
    }
    return result;  
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    const results = [
        //rock paper scissors (player)
        ["draw", "you win", "you lose"], // rock
        ["you lose", "draw", "you win"], // paper
        ["you win", "you lose", "draw"], // scissors
    ];

    let winner = results[computerChoice-1][humanChoice-1];
    if(winner == "you win") {
        humanScore++;
    }
    else if(winner == "you lose") {
        computerScore++;
    }
    let message = document.querySelector("#message");
    message.textContent = winner;
    let pScore = document.querySelector("#playerScore");
    pScore.textContent = "YOU: " + humanScore; 
    let cScore = document.querySelector("#computerScore");
    cScore.textContent = "ME: " + computerScore; 
}

let humanChoice = 0;  
let humanScore = 0, computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let buttons = [rock, paper, scissors];
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let target = event.target;
        switch(target.id) {
            case "rock":
                humanChoice = 1;
                break;
            case "paper": 
                humanChoice = 2;
                break;
            case "scissors":
                humanChoice = 3; 
                break; 
        }
        playRound(humanChoice);
    });
    
});
