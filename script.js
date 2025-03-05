//Game will be played against the computer.
//First task is to write a function that will randomly return "Rock", "Paper", or "Scissors".

function getComputerChoice () {
    if (Math.random() * 100 <= 33.333) {
        return "Rock";
    } else if (Math.random() * 100 >=33.33 && Math.random() <= 66.666) {
        return "Paper";
    } else (Math.random() * 100 >=66.666) 
        return "Scissors";
}

//Now we write the code that the human player has a hand in.

function getHumanChoice() {
    prompt ("What would you like to select?", "Rock, Paper, or Scissors")

    if (prompt === "Rock" || "rock") {
        return "Rock";
    } else if (prompt === "Paper" || "paper") {
        return "Paper";
    } else
        return "Scissors";
}

let humanScore = 0;
let computerScore = 0;
