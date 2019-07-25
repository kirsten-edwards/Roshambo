
console.log('Hello! please type \'Rock, Paper, or Scissors\'.\n');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput ===
        'scissors'){
        return userInput;
    } else {
        console.log('Incorrect entry. Please type either Rock, Paper or Scissors.');
    };
};

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = '';

    switch (randomNum){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            console.log('I\'m sorry. I couldn\'t choose.');
            break;
    };
    return computerChoice;
};


const determineWinner = (userInput, computerChoice) => {

    if (userInput === computerChoice) {
        return 'It\'s a tie! Try again!';
    }
    else if (userInput === 'rock'){
        if(computerChoice === 'scissors'){
            return 'You win! Rock beats Scissors!';
        }
        else {
            return 'You lose. Paper beats Rock.';
        };
    }
    else if (userInput === 'paper'){
        if(computerChoice === 'rock'){
            return 'You win!. Paper beats Rock.'
        }
        //Else computer would chose paper since same answers were already ruled out
        else {
            return 'You lose. Scissors beats Paper.';
        };
    }
    else if (userInput === 'scissors'){
        if (computerChoice === 'rock'){
            return 'You lose. Rock beats Scissors.';
        }
        else{
            return 'You win! Scissors beats Paper';
        };
    }
    else{
        return 'I\m not sure what happened there. Let\'s try again!';
    };
};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: '+ userChoice);
    console.log('The computer threw: '+ computerChoice+"\n");
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
