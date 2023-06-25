function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return 'Rock'
    } else if (choice === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection =
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.slice(1).toLowerCase();
        
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            console.log('Tie! Rock cancels Rock');
            return 0;
        } else if (computerSelection === 'Paper') {
            console.log('You lose! Paper beats Rock');
            return 2;
        } else {
            console.log('You win! Rock beats Scissors');
            return 1;
        }
    }

    if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            console.log('You win! Paper beats Rock');
            return 1;
        } else if (computerSelection === 'Paper') {
            console.log('Tie! Paper cancels Paper');
            return 0;
        } else {
            console.log('You lose! Scissors beats Paper');
            return 2;
        }
    }

    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            console.log('You lose! Rock beats Scissors');
            return 2;
        } else if (computerSelection === 'Paper') {
            console.log('You win! Scissors beats Paper')
            return 1;
        } else {
            console.log('Tie! Scissors cancels Scissors');
            return 0;
        }
    }
}

const playerSelections = document.querySelectorAll('.selection');

let playerWins = 0;
let computerWins = 0;

let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let displayRound = document.querySelector('.displayRound');
let displayMatch = document.querySelector('.displayMatch');
let selections = document.querySelector('.selections');
let playAgain = document.querySelector('.playAgain');

playAgain.addEventListener('click', (e) => {
    playerWins = 0;
    computerWins = 0;
    displayMatch.textContent = '';
    playAgain.toggleAttribute('hidden');
    selections.toggleAttribute('hidden');
});

playerSelections.forEach((selection) => {
    selection.addEventListener('click', (e) => {
        let computerChoice = getComputerChoice();

        let roundResult = playRound(selection.textContent, computerChoice);
        if (roundResult === 1) {
            displayRound.textContent = `You Win! ${selection.textContent} beats ${computerChoice}`;
            playerWins++;
        } else if (roundResult === 2) {
            displayRound.textContent = `You Lose! ${computerChoice} beats ${selection.textContent}`;
            computerWins++;
        } else {
            displayRound.textContent = `Tie! ${computerChoice} cancels ${selection.textContent}`;
        }

        playerScore.textContent = `Player Score: ${playerWins}`;
        computerScore.textContent = `Computer Score: ${computerWins}`;

        if (playerWins > 4) {
            displayMatch.textContent = `You win! Score: (Player) ${playerWins} - (Computer) ${computerWins}`;
            playAgain.toggleAttribute('hidden');
            selections.toggleAttribute('hidden');
        } else if (computerWins > 4) {
            displayMatch.textContent =  `You lose! Score: (Player) ${playerWins} - (Computer) ${computerWins}`;
            playAgain.toggleAttribute('hidden');
            selections.toggleAttribute('hidden');
        }
    });
});

// console.log(game());