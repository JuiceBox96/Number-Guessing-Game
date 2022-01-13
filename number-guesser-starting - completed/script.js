let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget() {
  return Math.floor(Math.random() * 9);
};

function compareGuesses(humanGuess, computerGuess, secretTarget) {
  const humanDiff = Math.abs(humanGuess - computerGuess);
  const computerDiff = Math.abs(humanGuess - computerGuess);
  return humanDiff <= computerDiff;
}

function updateScore(human,computer) {
  if (human === 'Wins') {
    usersScore++;
  }
  if (computer === 'Wins') {
    computerScore++;
  }
}

function advanceRound() {
updateScore('human');
console.log(humanScore);

updateScore('computer');
console.log(computerScore);
}

function advanceRound() {
    currentRoundNumber += 1;
};
