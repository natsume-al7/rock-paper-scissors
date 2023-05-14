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
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            return 'Tie! Rock cancels Rock';
        } else if (computerSelection === 'Paper') {
            return 'You lose! Paper beats Rock';
        } else {
            return 'You win! Rock beats Scissors';
        }
    }

    if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return 'You win! Paper beats Rock';
        } else if (computerSelection === 'Paper') {
            return 'Tie! Paper cancels Paper';
        } else {
            return 'You lose! Scissors beats Paper';
        }
    }

    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return 'You lose! Rock beats Scissors';
        } else if (computerSelection === 'Paper') {
            return 'You win! Scissors beats Paper';
        } else {
            return 'Tie! Scissors cancels Scissors';
        }
    }
}