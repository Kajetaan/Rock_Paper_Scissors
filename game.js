console.log("Welcome to ROCK PAPER AAAAND SCIIISSSORRRSSSS!!!")



let human_score = 0;
let computer_score = 0;
let winner;
let final_score;
let looser_score;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;

    let computer_choice;

    switch (number) {
        case 1:
            computer_choice = "rock";
            break;
        case 2:
            computer_choice = "paper";
            break;
        case 3:
            computer_choice = "scissors";
            break;
    }

    return computer_choice;
}

function getHumanChoice() {
    let promptMessage = prompt("Type rock, paper or scissors", "Rock");
    if (promptMessage === null) {
        return "false"; 
    }
    promptMessage = promptMessage.toLowerCase();

    switch (promptMessage) {
        case "rock":
            human_choice = "rock";
            break;
        case "paper":
            human_choice = "paper";
            break;
        case "scissors":
            human_choice = "scissors";
            break;
        default:
            human_choice = "false";

    }

    return human_choice;

}

function playRound(computer, human) {

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
        console.log("computer wins");
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

