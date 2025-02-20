console.log("hello world!")

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;

    let choice;

    switch (number){
        case 1:
            choice = "Rock"
            break;
        case 2:
            choice = "Paper"
            break;
        case 3:
            choice = "Scissors"
            break;    
    }

    return choice;
}