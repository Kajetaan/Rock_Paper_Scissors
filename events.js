// Select UI elements
const buttons = document.querySelectorAll(".choices button");
const playerScoreDisplay = document.querySelector("#player_box p");
const computerScoreDisplay = document.querySelector("#computer_box p");
const resultDisplay = document.createElement("p");
const userInterface = document.querySelector(".userinterface");
userInterface.appendChild(resultDisplay);

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        console.log(`Button ${button.id} clicked!`); // Log button click
        const winner = playRound(computer = getComputerChoice(), playerChoice);
        updateUI(winner);
        checkGameOver();
    });
});

// Function to update the UI after each round
function updateUI(winner) {
   
    playerScoreDisplay.textContent = `Player: ${human_score}`;
    computerScoreDisplay.textContent = `Computer: ${computer_score}`;
    resultDisplay.textContent = winner === "none" ? "It's a draw!" : `${winner} wins this round!`;
}

// Check if game is over
function checkGameOver() {
    if (human_score == 3 || computer_score == 3) {
        const finalWinner = human_score === 3 ? "Human" : "Computer";
        alert(`${finalWinner} wins the game!`);
        showPlayAgainButton();
    }
}

// Show Play Again button
function showPlayAgainButton() {
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.addEventListener("click", resetGame);
    userInterface.appendChild(playAgainButton);
    buttons.forEach(button => button.disabled = true);
}

// Reset the game
function resetGame() {
    human_score = 0;
    computer_score = 0;
    playerScoreDisplay.textContent = "Player: 0";
    computerScoreDisplay.textContent = "Computer: 0";
    resultDisplay.textContent = "";

    // Find and remove the Play Again button
    const playAgainButton = [...userInterface.querySelectorAll("button")]
        .find(button => button.textContent === "Play Again");

    if (playAgainButton) {
        playAgainButton.remove();
    }

    // Re-enable the choice buttons
    buttons.forEach(button => button.disabled = false);
}
