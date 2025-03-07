//Game will be played against the computer.
//First task is to write a function that will randomly return "Rock", "Paper", or "Scissors".

function getComputerChoice () {
    let seed = (Math.random() *100)
    if (Math.random() * 100 <= 33.333) {
        return "Rock";
    } else if (Math.random() * 100 >=33.33 && Math.random() <= 66.666) {
        return "Paper";
    } else (Math.random() * 100 >=66.666) 
        return "Scissors";
}

//Now we write the code that the human player has a hand in.

function getHumanChoice() {
    prompt ("What would you like to select?", "Rock, Paper, or Scissors").toLowerCase()
    if (prompt === "rock") {
        return "Rock";
    } else if (prompt === "paper") {
        return "Paper";
    } else
        return "Scissors";
}
/*
//Declare score variables

let humanScore = 0;
let computerScore = 0;

//And now we write the logic to play a round.
function playRound(humanChoice, computerChoice) {
    switch(humanChoice, computerChoice) {
        case Rock, Rock:
            "Tie!";
            break;
        case Rock, Paper:
            "Lose! Paper beats Rock!";
            computerChoice++;
            break;
        case Rock, Scissors:
            "Win! Rock beats Scissors";
            humanChoice++
            break;
        case Scissors, Rock:
            "Lose! Rock beats Scissors";
            computerChoice++;
            break;
        case Scissors, Paper:
            "Win! Scissors beats Paper!";
            humanChoice++;
            break;
        case Scissors, Scissors:
            "Tie!";
            break;
        case Paper, Rock:
            "Win! Paper beats Rock!";
            humanChoice++;
            break;
        case Paper, Paper:
            "Tie!";
            break;
        case Paper, Scissors:
            "Lose! Scissors beats Paper";
            computerChoice++;
            break;
    }
}


//call the selections from functions above

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
*/

function playGame () {

//Declare score variables
let humanScore = 0;
let computerScore = 0;

//And now we write the logic to play a round.
function playRound(humanChoice, computerChoice) {
    switch(humanChoice, computerChoice) {
        case Rock, Rock:
            "Tie!";
            break;
        case Rock, Paper:
            "Lose! Paper beats Rock!";
            computerChoice++;
            break;
        case Rock, Scissors:
            "Win! Rock beats Scissors";
            humanChoice++
            break;
        case Scissors, Rock:
            "Lose! Rock beats Scissors";
            computerChoice++;
            break;
        case Scissors, Paper:
            "Win! Scissors beats Paper!";
            humanChoice++;
            break;
        case Scissors, Scissors:
            "Tie!";
            break;
        case Paper, Rock:
            "Win! Paper beats Rock!";
            humanChoice++;
            break;
        case Paper, Paper:
            "Tie!";
            break;
        case Paper, Scissors:
            "Lose! Scissors beats Paper";
            computerChoice++;
            break;
    }
}

//call the selections from functions above
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
}