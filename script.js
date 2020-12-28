let computerScore = 0;
let playerScore = 0;

// Set up event listeners for the three choices
const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', e => {
    let playerPlay = e.target.id;
    displayResults(computerPlay(), playerPlay);
}));
choices.forEach(choice => choice.addEventListener('transitionend', e => {
    e.target.classList.remove('wonRound', 'lostRound', 'tiedRound');
}));

// Set up event listeners for the scoreText (which displays the point tallies)
const scoreText = document.querySelectorAll('.scoreText');
scoreText.forEach(text => text.addEventListener('transitionend', e => {
    e.target.classList.remove('wonRound', 'lostRound');
}));

// Display results after each round
function displayResults(computerMove, playerMove) {
    let roundWinner = playRound(computerMove, playerMove);
    let playerScoreText = document.querySelector('#playerScoreText');
    let computerScoreText = document.querySelector('#computerScoreText');
    let score = document.querySelector('#score');

    highlightMoves(computerMove, playerMove, roundWinner);

    // Remove end message if starting new round
    if (playerScore === 0 && computerScore === 0) {
        end.textContent = "";
    }
    
    // Update scores
    if (roundWinner === "player") {
        playerScore++;
    }
    else if (roundWinner === "computer") {
        computerScore++;
    }

    // Display updated scores
    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;

    // Change text color of scoreText to show who won/lost
    if (roundWinner === "player") {
        playerScoreText.classList.add("wonRound");
        computerScoreText.classList.add("lostRound");
    }
    else if (roundWinner === "computer") {
        computerScoreText.classList.add("wonRound");
        playerScoreText.classList.add("lostRound");
    }

    // End game if someone has reached 5 points
    if (playerScore >= 5) {
        end.textContent = `You won! Make another move to start a new match.`
        resetScore();
    }
    else if (computerScore >= 5) {
        end.textContent = `You lost. Make another move to start a new match.`
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

// Highlight the previous move of the player and computer, using correct color
function highlightMoves(computerMove, playerMove, roundWinner) {
    // Clear previous move
    const moves = document.querySelectorAll(".move");
    moves.forEach(move => move.classList.remove("wonRound", "lostRound", "tiedRound"));
    
    // Select player and computer moves' display
    const playerDisplay = document.querySelector(`#player${playerMove}`);
    const computerDisplay = document.querySelector(`#computer${computerMove}`);

    // Select the choice the user clicked
    const choice = document.querySelector(`#${playerMove}`)

    if (roundWinner === "player") {
        playerDisplay.classList.add("wonRound");
        computerDisplay.classList.add("lostRound");
        choice.classList.add("wonRound");
    }
    else if (roundWinner === "computer") {
        playerDisplay.classList.add("lostRound");
        computerDisplay.classList.add("wonRound");
        choice.classList.add("lostRound");
    }
    else {
        playerDisplay.classList.add("tiedRound");
        computerDisplay.classList.add("tiedRound");
        choice.classList.add("tiedRound");
    }
}