const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        console.log('Error, invalid input');
    }
};

function getComputerChoice() {
    let computerInput = Math.floor(Math.random() * 3);

    switch(computerInput) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            console.log('Error, Invalid choice.')
    }
};

function determineWinner(userChoice, getComputerChoice) {
    if(userChoice === getComputerChoice) {
        return console.log('The game was a tie');
    }
    if(userChoice === 'rock') {
        return getComputerChoice === 'paper' ? 'You lose' : 'You win'
    } else if(userChoice === 'paper') {
        return getComputerChoice === 'scissors' ? 'You lose' : 'You win'
    } else if(userChoice === 'scissors') {
        return getComputerChoice === 'rock' ? 'You lose' : 'You win'
    }
}

function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame()