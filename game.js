console.log("Welcome to ROCK PAPER AAAAND SCIIISSSORRRSSSS!!!")

function playGame() {

    let human_score = 0;
    let computer_score = 0;
    let winner;
    let final_score;
    let looser_score;
    console.log(human_score);

    while ((human_score || computer_score) < 3) {
        playRound();
        console.log(human_score);
    }


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
            return "false"; // Handle the case when the user cancels
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

    function playRound(computer = getComputerChoice(), human = getHumanChoice()) {

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

    if(human_score > computer_score) {
        console.log("Human wins")
        winner = "human";
        final_score = human_score;
        looser_score = computer_score; 
    } else {
        console.log("Computer wins")
        winner = "computer";
        final_score = computer_score;
        looser_score = human_score;
    }
    
    return "The winner is " + winner + " with score " + final_score + " to " + looser_score;
}