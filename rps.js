function getComputerChoice() {
    result = Math.floor(Math.random()*3) + 1;
    if(result == 1) {
        console.log('rock');
    }
    else if (result == 2) {
       console.log('paper');
    }
    else if(result == 3) {
        console.log('scissors');
    }
    return result;  
}

function getHumanChoice() {
    result = prompt("type rock, paper, or scissors");
    if(result == 'rock') {
        return 1;
    }
    else if(result == 'paper') {
        return 2;
    }
    else {
        return 3;
    }
}

function playRound(humanChoice, computerChoice) {
    const results = [
        //rock paper scissors (player)
        ["draw", "you win", "you lose"], // rock
        ["you lose", "draw", "you win"], // paper
        ["you win", "you lose", "draw"], // scissors
    ]

    let winner = results[computerChoice-1][humanChoice-1];
    if(winner == "you win") {
        humanScore++;
    }
    else if(winner == "you lose") {
        computerScore++;
    }
    
    console.log(winner);
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
    
let humanScore = 0, computerScore = 0;
playRound(humanChoice, computerChoice);

