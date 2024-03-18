//3.begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
    let randomnumber = Math.floor(Math.random() * 3);
    let choice;
    
    if (randomnumber === 0){
        choice = 'rock';
    } else if (randomnumber === 1){
        choice = 'paper';
    } else if (randomnumber === 2){
        choice = 'scissor';
    }
    
    return choice;
}

function playRound(playerSelection, computerSelection) {
    console.log('player choose', playerSelection);
    console.log('computer choose', computerSelection);

    if (playerSelection === computerSelection){
        console.log("It's a Tie");
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lost');
        return 'computer';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        console.log('You win');
        return 'player';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You win');
        return 'player';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        console.log('You lost');
        return 'computer';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        console.log('You win');
        return 'player';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        console.log('You lost');
        return 'computer';
    }
}

function playGame (){
    let playerScore = 0;
    let computerScore = 0;
    let roundPlay = 0;

    for(let i = 0; i < 5; i++) { //loop, repreat function.
        let playerSelection = prompt(`Round: ${roundPlay + 1}\nEnter your choice (rock, paper, or scissors):`).toLowerCase(); //prompt()
        let computerSelection = getComputerChoice();

        let winner = playRound(playerSelection, computerSelection);
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
        roundPlay++;
    }

    // using console.log() to display the results of each round and the winner at the end.
    console.log("Game Over!");
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);

}

playGame();