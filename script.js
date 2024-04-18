function getComputerChoice() {
    let randomnumber = Math.floor(Math.random() * 3);
    let choice;
    
    if (randomnumber === 0){
        choice = 'rock';
    } else if (randomnumber === 1){
        choice = 'paper';
    } else if (randomnumber === 2){
        choice = 'scissors';
    }
    
    return choice;
}

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return 'tie';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'player';
    } else {
        return 'computer';
    }
}

function playGame (){
    let playerScore = 0;
    let computerScore = 0;
    let roundPlay = 0;

    const resultsDiv = document.getElementById('results');
    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');
    const winnerElement = document.getElementById('winner');

    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    rockButton.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    paperButton.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    scissorsButton.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });

    function displayScores() {
        playerScoreElement.textContent = `Player Score: ${playerScore}`;
        computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    }

    function displayWinner() {
        if (playerScore === 5) {
            winnerElement.textContent = 'Player wins the game!';
        } else if (computerScore === 5) {
            winnerElement.textContent = 'Computer wins the game!';
        }
    }
    

    function playRound(playerSelection, computerSelection) {
        let winner = determineWinner(playerSelection, computerSelection);

        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
        roundPlay++;

        displayScores();
        displayWinner();
    }
}

playGame();