console.log("Welcome to ROCK PAPER AAAAND SCIIISSSORRRSSSS!!!")

let human_score, computer_score = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;

    let computer_choice;

    switch (number) {
        case 1:
            computer_choice = "Rock";
            break;
        case 2:
            computer_choice = "Paper";
            break;
        case 3:
            computer_choice = "Scissors";
            break;
    }

    return computer_choice;
}

function getHumanChoice() {
    let promptMessage = (prompt("Type rock, paper or scissors", "Rock").toLowerCase() || "");

    let human_choice;

    switch (promptMessage) {
        case "rock":
            human_choice = "Rock";
            break;
        case "paper":
            human_choice = "Paper";
            break;
        case "scissors":
            human_choice = "Scissors";
            break;
        default:
            human_choice = "false";

    }

    return human_choice;

}

function playRound(computer = getComputerChoice(), human = getHumanChoice()) {

    let winner;

    if (human == "false") {
        while (human == "false") {
            console.log("wrong input");
            human = getHumanChoice();
        }
    }

    if (human == computer) {
        console.log(human);
        console.log(computer);
        console.log("draw");
        winner = "none";
    } else if ((computer == "rock" && human == "scissors") ||
        (computer == "paper" && human == "rock") ||
        (computer == "scissors" && human == "paper")) {
        console.log(human)
        console.log(computer)
        consol.log("computer wins");
        winner = "computer";
        computer_score++;
    } else {
        console.log(human);
        console.log(computer);
        console.log("human wins");
        winner = "human";
        human_score++;
    }
    return winner;

}
