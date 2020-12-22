let computerScore = 0;
let playerScore = 0;

// Set up event listeners
const buttons = document.querySelectorAll('input');
buttons.forEach(button => button.addEventListener('click', e => {
    e.target.classList.add('selected');
    let playerPlay = e.target.id;
    displayResults(computerPlay(), playerPlay);
}));
buttons.forEach(button => button.addEventListener('transitionend', e => {
    e.target.classList.remove('selected');
}));

// Display results after each round
function displayResults(computerMove, playerMove) {
    let roundWinner = playRound(computerMove, playerMove);
    let score = document.querySelector('#score');
    
    // Update scores and log result of round
    if (roundWinner === "player") {
        playerScore++;
    }
    else if (roundWinner === "computer") {
        computerScore++;
    }

    score.textContent = `You: ${playerScore} - Opponent: ${computerScore}`;

    // End game if someone has reached 3 points
    if (playerScore >= 5) {
        resetScore();
    }
    else if (computerScore >= 5) {
        resetScore();
    }
}

function resetScore() {
    computerScore = 0;
    playerScore = 0;
}

// Choose computer's next move
function computerPlay() {
    // Generate random integer (0, 1, 2) and store in randNum
    let randNum = Math.floor(Math.random() * 3);

    switch (randNum) {
        // If randNum === 0, return 'Rock'
        case 0:
            return 'Rock';
            break;
        // Else if randNum === 1, return 'Paper'
        case 1: 
            return 'Paper';
            break;
        // Else, return 'Scissors'
        case 2: 
            return 'Scissors';
            break;
        // Return error if randNum doesn't match one of the expected cases
        default:
            return 'Error';
    }
}

// Determine who won the round
function playRound(computerSelection, playerSelection) {
    // Respond if player chooses 'Rock'
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            return 'player';
        }
        else if (computerSelection === 'Rock') {
            return 'tie';
        }
        else if (computerSelection === 'Paper') {
            return 'computer';
        }
    }
    // Respond if player chooses 'Paper'
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            return 'computer';
        }
        else if (computerSelection === 'Rock') {
            return 'player';
        }
        else if (computerSelection === 'Paper') {
            return 'tie';
        }
    }
    // Respond if player chooses 'Scissors'
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Scissors') {
            return 'tie';
        }
        else if (computerSelection === 'Rock') {
            return 'computer';
        }
        else if (computerSelection === 'Paper') {
            return 'player';
        }
    }
}
