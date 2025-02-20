console.log("hello world!")

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
    let promtMessage = (prompt("Type rock, paper or scissors", "Rock").toLowerCase() || "");

    let human_choice;

    switch (promtMessage) {
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