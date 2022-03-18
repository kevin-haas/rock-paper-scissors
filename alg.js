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

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock" || playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors" || 
        playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
            playerWins(true);
        }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper" || playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock" || 
            playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
                playerWins(false);
            }
    else if (playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'scissors') {
        console.log("invalid");
        }
    else {
        console.log("tie");
    }
}

function playerWins(bool) {
    if (bool) {
        const playerScore = document.querySelector('#playerScore');
        const newScore = +playerScore.textContent + 1;
        playerScore.textContent = newScore;
    }
    else {
        const compScore = document.querySelector('#compScore');
        const newScore = +compScore.textContent + 1;
        compScore.textContent = newScore;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});