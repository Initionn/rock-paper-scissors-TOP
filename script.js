//Game will be played against the computer.
//First task is to write a function that will randomly return "Rock", "Paper", or "Scissors".

function getComputerChoice () {
    let seed = (Math.random() *100)
    if (seed <= 33.333) {
        return "Rock";
    } else if (seed >=33.33 && seed <= 66.666) {
        return "Paper";
    } else (seed >=66.666) 
        return "Scissors";
}

//Now we write the code that the human player has a hand in.

function getHumanChoice() {
    let selection = prompt ("What would you like to select?", "Rock, Paper, or Scissors").toLowerCase()
    switch (selection) {
        case "Rock":
            selection = "Rock";
            break;
        case "Paper":
            selection = "Paper";
            break;
        case "Scissors":
            selection = "Scissors";
            break;
    }
}
//play game function time!
function playGame () {

//Declare score variables
let humanScore = 0;
let computerScore = 0;

//And now we write the logic to play a round.
function playRound(humanChoice, computerChoice) {
    switch(humanChoice, computerChoice) {
        case "Rock", "Rock":
            console.log("Tie!");
            break;
        case "Rock", "Paper":
            console.log("Lose! Paper beats Rock!");
            computerChoice++;
            break;
        case "Rock", "Scissors":
            console.log("Win! Rock beats Scissors");
            humanChoice++
            break;
        case "Scissors", "Rock":
            console.log("Lose! Rock beats Scissors");
            computerChoice++;
            break;
        case "Scissors", "Paper":
            console.log("Win! Scissors beats Paper!");
            humanChoice++;
            break;
        case "Scissors", "Scissors":
            console.log("Tie!");
            break;
        case "Paper", "Rock":
            console.log("Win! Paper beats Rock!");
            humanChoice++;
            break;
        case "Paper", "Paper":
            console.log("Tie!");
            break;
        case "Paper", "Scissors":
            console.log("Lose! Scissors beats Paper");
            computerChoice++;
            break;
    }
}

//call the selections from functions above
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
}