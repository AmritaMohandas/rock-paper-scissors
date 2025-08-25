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

console.log(getComputerChoice());
console.log(getHumanChoice());