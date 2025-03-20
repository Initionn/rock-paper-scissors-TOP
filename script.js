function getComputerChoice () {
    let seed = (Math.random() * 100);
    if (seed < 33.33) {
        console.log("Computer chose Rock");
        return "Rock";
    } else if (seed >= 33.33 && seed <= 66.66) {
        console.log("Computer chose Paper");
        return "Paper";
    } else {
        console.log("Computer chose Scissors");
        return "Scissors";
    }
    }

function getHumanChoice() {
    let selection = prompt("What would you like to select?", "Rock, Paper, or Scissors");
    switch (selection.toLowerCase()) {
        case "rock":
            console.log("You chose Rock");
            return "Rock";
        case "paper":
            console.log("You chose Paper");
            return "Paper";
        case "scissors":
            console.log("You chose Scissors");
            return "Scissors";
    }
}

function playGame() {

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "Rock":
            switch (computerChoice) {
                case "Rock":
                    console.log("Tie!");
                    break;
                case "Paper":
                    console.log("You lose! Paper beats Rock!");
                    computerScore++;
                    break;
                case "Scissors":
                    console.log("You win! Rock beats Scissors!");
                    humanScore++;
                    break;
            }
            break;
        case "Paper":
            switch (computerChoice) {
                case "Rock":
                    console.log("You win! Paper beats Rock!");
                    humanScore++;
                    break;
                case "Paper":
                    console.log("Tie!");
                    break;
                case "Scissors":
                    console.log("You lose! Scissors beats Paper");
                    computerScore++;
                    break;
            }
            break;
        case "Scissors":
            switch (computerChoice) {
                case "Rock":
                    console.log("You lose! Rock beats Scissors!");
                    computerScore++;
                    break;
                case "Paper":
                    console.log("You win! Scissors beats Paper!");
                    humanScore++;
                    break;
                case "Scissors":
                    console.log("Tie!");
                    break;
            }
            break;
    }
}

    if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    } else if (computerScore > humanScore) {
        console.log("Aww, the Computer won!");
    } else {
        console.log("Yeah that was a tie huh?");
    }
    }