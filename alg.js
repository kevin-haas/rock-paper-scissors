function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            console.log("Comp chose rock");
            return "Rock";
        case 1:
            console.log("Comp chose paper");
            return "Paper";
        case 2:
            console.log("Comp chose scissors");
            return "Scissors";
    }
}

function playRound() {
    let playerSelection = prompt("What do you choose?");
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock" || playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors" || 
        playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
            console.log("Player wins")
            return "You won!";
        }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper" || playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock" || 
            playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
                console.log("Computer wins");
                return "You lost.";
            }
    else if (playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'scissors') {
        console.log("invalid");
        playRound();
        }
    else {
        console.log("tie");
        return "Tie";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}