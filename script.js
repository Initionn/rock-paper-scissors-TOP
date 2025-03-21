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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "Rock":
            switch (computerChoice) {
                case "Rock":
                    roundAnnounce.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}, it's a Tie!` 
                    break;
                case "Paper":
                    roundAnnounce.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}, you lost this round!` 
                    computerScore++;
                    break;
                case "Scissors":
                    roundAnnounce.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}, you win this round!` 
                    humanScore++;
                    break;
            }
            break;
        case "Paper":
            switch (computerChoice) {
                case "Rock":
                    roundAnnounce.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}, you win this round!` 
                    humanScore++;
                    break;
                case "Paper":
                    roundAnnounce.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}, it's a Tie!` 
                    break;
                case "Scissors":
                    roundAnnounce.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}, you lost this round!` 
                    computerScore++;
                    break;
            }
            break;
        case "Scissors":
            switch (computerChoice) {
                case "Rock":
                    roundAnnounce.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}, you lost this round!` 
                    computerScore++;
                    break;
                case "Paper":
                    roundAnnounce.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}, you win this round!` 
                    humanScore++;
                    break;
                case "Scissors":
                    roundAnnounce.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}, it's a Tie!` 
                    break;
            }
            break;
    }}

    // js introduction

    // main window
const mainWindow = document.querySelector("body");
const rpsWindow = document.createElement("div");
rpsWindow.classList.add("mainWindow");
rpsWindow.textContent = "Welcome to Rock Paper Scissors!";

mainWindow.appendChild(rpsWindow);

// rock button
const rockButton = document.createElement("button");
rockButton.classList.add("rpsButton");
rockButton.textContent = "Select Rock";

mainWindow.appendChild(rockButton);

// paper button
const paperButton = document.createElement("button");
paperButton.classList.add("rpsButton");
paperButton.textContent = "Select Paper";

mainWindow.appendChild(paperButton);

// scissors
const scissorsButton = document.createElement("button");
scissorsButton.classList.add("rpsButton");
scissorsButton.textContent = "Select Scissors";

mainWindow.appendChild(scissorsButton);

// round results announce
const roundAnnounce = document.createElement("h3");
mainWindow.appendChild(roundAnnounce);

// score results announce
const scoreAnnounce = document.createElement("h2");
scoreAnnounce.textContent = `The current score is ${humanScore} for the Human, and ${computerScore} for the computer!`;
mainWindow.appendChild(scoreAnnounce);

const winnerAnnounce = document.createElement("h1");
winnerAnnounce.textContent = "";
mainWindow.appendChild(winnerAnnounce);

// rock listener
rockButton.addEventListener("click", () => {
    console.log("You chose Rock");
    computerChoice = getComputerChoice();
    playRound("Rock", computerChoice);
    scoreAnnounce.textContent = `The current score is ${humanScore} for the Human, and ${computerScore} for the computer!`;
    if (humanScore == 5) {
        winnerAnnounce.textContent = "You won this game! Keep playing until you get another 5!"
    } else if (computerScore == 5) {
        winnerAnnounce.textContent = "The computer took this game! Keep playing and you'll get 'em back!"
    }   winnerAnnounce.textContent = "No winner of this game yet!"
});

paperButton.addEventListener("click", () => {
    console.log("You chose Paper");
    computerChoice = getComputerChoice();
    playRound("Paper", computerChoice);
    scoreAnnounce.textContent = `The current score is ${humanScore} for the Human, and ${computerScore} for the computer!`;
    if (humanScore == 5) {
        winnerAnnounce.textContent = "You won this game! Keep playing until you get another 5!"
    } else if (computerScore == 5) {
        winnerAnnounce.textContent = "The computer took this game! Keep playing and you'll get 'em back!"
    }   winnerAnnounce.textContent = "No winner of this game yet!"
});

scissorsButton.addEventListener("click", () => {
    console.log("You chose Scissors");
    computerChoice = getComputerChoice();
    playRound("Scissors", computerChoice);
    scoreAnnounce.textContent = `The current score is ${humanScore} for the Human, and ${computerScore} for the computer!`;
    if (humanScore == 5) {
        winnerAnnounce.textContent = "You won this game! Keep playing until you get another 5!"
    } else if (computerScore == 5) {
        winnerAnnounce.textContent = "The computer took this game! Keep playing and you'll get 'em back!"
    }   winnerAnnounce.textContent = "No winner of this game yet!"
});


// 1. For now, remove the logic that plays exactly five rounds.
// 2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct 
//    playerSelection every time a button is clicked. 
// 3. Add a div for displaying results and change all of your console.logs into DOM methods.
// 4. Display the running score, and announce a winner of the game once one player reaches 5 points