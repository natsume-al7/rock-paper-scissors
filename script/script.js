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

function game() {
    let playerWins = 0;
    let  computerWins = 0;
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, paper, or scissors: ');
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 1) {
            playerWins++;
        } else if (roundResult === 2) {
            computerWins++;
        }
    }
    if (playerWins > computerWins) {
        return `You win! Score: (Player) ${playerWins} - (Computer) ${computerWins}`;
    } else if (playerWins < computerWins) {
        return `You lose! Score: (Player) ${playerWins} - (Computer) ${computerWins}`;
    } else {
        return `Tie! Score: (Player) ${playerWins} - (Computer) ${computerWins}`
    }
}

console.log(game());