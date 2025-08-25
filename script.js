function getComputerChoice() {

    let randomVal = Math.floor(Math.random() * 3);
    let choice = "";

    if (randomVal == 0) {
        choice = "rock";
    }
    else if (randomVal == 1) {
        choice = "paper";
    }
    else if (randomVal == 2) {
        choice = "scissors";
    }

    return choice;
};

function getHumanChoice() {
    choice = prompt("Select rock, paper, or scissors: ");
    return choice;
};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        console.log(`You tie! ${humanChoice} ties with ${computerChoice}.`);
    }
    else if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

    return humanScore, computerScore;
};

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        humanScore, computerScore = playRound(humanSelection, computerSelection);
    }
    console.log(humanScore, computerScore);
};

let humanScore = 0;
let computerScore = 0;
playGame();