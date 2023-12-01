const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else if (userInput === 'bomb') {
        // Secret cheat code: 'bomb'
        return userInput; } else {
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

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'You won! (cheat code activated)';
    }

    if (userChoice === computerChoice) {
        return 'The game was a tie';
    } else if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'You lose' : 'You win';
    } else if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'You lose' : 'You win';
    } else if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'You lose' : 'You win';
    } else {
        return 'Invalid input';
    }
}


function playGame() {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame()