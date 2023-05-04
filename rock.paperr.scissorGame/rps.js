const rockButton = document.getElementById('rock-btn')
const paperButton = document.getElementById('paper-btn')
const scissorButton = document.getElementById('scissor-btn')
const yourChoice = document.getElementById('your-el')
let computerText = document.getElementById('computerChoice-el') 
let userChoice = ''
let computerChoice = ''
let winner = document.getElementById('winner-el')

rockButton.addEventListener('click' , function(){
    userChoice = 'Rock'
    yourChoice.textContent = 'Your choice: ' + userChoice
    choice();
});

paperButton.addEventListener('click' , function(){
    userChoice = 'Paper'
    yourChoice.textContent = 'Your choice: ' + userChoice
    choice();
});

scissorButton.addEventListener('click' , function(){
    userChoice = 'Scissor'
    yourChoice.textContent = 'Your choice: ' + userChoice
    choice();
});

function choice() {
    let random = Math.floor(Math.random()*3) + 1;
    if (random === 1) {
        computerChoice = 'Rock';
    } else if (random === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissor';
    }
    computerText.textContent = 'Computer choice: ' + computerChoice;
    theWinner();
}

function theWinner() {
  if (userChoice == computerChoice) {
    winner.textContent = 'Tie';
  } else if (userChoice === 'Rock') {
    if (computerChoice === 'Scissor') {
      winner.textContent =  'You win!';
    } else {
      winner.textContent=  'Computer wins!';
    }
  } else if (userChoice === 'Paper') {
    if (computerChoice === 'Rock') {
      winner.textContent = 'You win!';
    } else {
      winner.textContent = 'Computer wins!';
    }
  } else if (userChoice === 'Scissor') {
    if (computerChoice === 'Paper') {
      winner.textContent = 'You win!';
    } else {
      winner.textContent = 'Computer wins!';
    }
  }
}
