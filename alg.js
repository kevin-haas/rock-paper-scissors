function computerPlay() {
    let choice = Math.floor(Math.random() * 3)
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("Player wins")
        return "You won!";
    }
}