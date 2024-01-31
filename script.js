function getComputerChoice() {
    var options = ["Rock", "Paper", "Scissors"];
    var choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

let pc_score = 0;
let player_score = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log("You lose!");
        pc_score++;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log("You win!");
        player_score++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log("You lose!");
        pc_score++;
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else {
        console.log("You win!");
        player_score++;
    }
}

function game() {
    for (let i = 0; i < 5; ++i) {
        const playerSelection = prompt("What's your choice? (Rock, Paper, or Scissors)");
        const computerSelection = getComputerChoice();
        console.log("Computer chose: " + computerSelection);
        playRound(playerSelection, computerSelection);
    }

    if (pc_score > player_score) {
        console.log("Computer won!");
    } else if (pc_score < player_score) {
        console.log("You won!");
    } else {
        console.log("It's a tie!");
    }
}

game();
