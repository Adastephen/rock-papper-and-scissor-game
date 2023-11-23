
function getComputerChoice() {
    let games = ['rock', 'papper', 'scissor'];
    let rand = Math.floor(Math.random() * 3) + 1;
    return games[rand - 1];
}
console.log(getComputerChoice());

function player() {
  let guess = prompt(`Enter your guess: `);
  if (guess === 'rock' || guess === 'papper' || guess === 'scissor') {
        return guess;
    }
    else {
        alert("Out of text!!!. You can guess; rock, papper or scissor");
    }
}
function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){ 
    alert("You win!, " + playerSelection + " beat " + computerSelection);
  }
  else if (playerSelection === 'rock' || playerSelection === 'papper' || playerSelection === 'scissor') {
    alert("You loose!, " + computerSelection + " beat " + playerSelection);
  }
}
  const playerSelection = player();
  const computerSelection = getComputerChoice();
  alert("The computer says: " + computerSelection);
  
  playRound(playerSelection, computerSelection);