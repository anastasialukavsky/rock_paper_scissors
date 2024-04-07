const prompt = require('prompt-sync')();
let rounds = 1;
let player1Score = 0;
let player2Score = 0;
let isContinuePlaying = true;

while (isContinuePlaying) {
  let playerChoice = prompt(
    'Please choose rock, paper, scissors, lizard or spock: '
  ).toLowerCase();
  while (
    playerChoice !== 'rock' &&
    playerChoice !== 'paper' &&
    playerChoice !== 'scissors' &&
    playerChoice !== 'lizard' &&
    playerChoice !== 'spock'
  ) {
    playerChoice = prompt(
      'Invalid option! Please choose rock, paper, scissors, lizard or spock: '
    );
  }

  const player2RandomChoice = randomChoice();

  const roundWinner = winner(playerChoice, player2RandomChoice);
  score(roundWinner);

  rounds++;

  let keepPlaying = prompt(
    "Would you like to continue playing? Please enter 'yes' or 'no': "
  ).toLowerCase();

  while (keepPlaying !== 'yes' && keepPlaying !== 'no') {
    keepPlaying = prompt(
      "Invalid answer. Please enter 'yes' or 'no': "
    ).toLowerCase();
  }

  if (keepPlaying === 'no') {
    console.log(
      `FINAL SCORE:\nYour score: ${player1Score}\nPlayer 2 score: ${player2Score}`
    );

    if (player1Score > player2Score) {
      console.log('You Win!');
    } else if (player2Score > player1Score) {
      console.log('Player 2 Wins!');
    } else {
      console.log("It's a tie!");
    }

    isContinuePlaying = false;
  }
}

function randomChoice() {
  let choice = Math.floor(Math.random() * 5);

  if (choice === 0) {
    console.log(`Player 2 chose rock`);
    return 'rock';
  } else if (choice === 1) {
    console.log(`Player 2 chose paper`);
    return 'paper';
  } else if (choice === 2) {
    console.log(`Player 2 chose scisssors`);
    return 'scissors';
  } else if (choice === 3) {
    console.log(`Player 2 chose lizard`);
  } else {
    console.log(`Player 2 chose Spock`);
  }
}

function winner(player1, player2) {
  if (player1 === player2) {
    console.log("It's a tie");
    return "It's a tie";
  } else if (
    (player1 === 'rock' && player2 === 'scissors') ||
    (player1 === 'scissors' && player2 === 'paper') ||
    (player1 === 'paper' && player2 === 'rock') ||
    (player1 === 'lizard' && player2 === 'paper') ||
    (player1 === 'lizard' && player2 === 'spock') ||
    (player1 === 'spock' && player2 === 'scissors') ||
    (player1 === 'spock' && player2 === 'rock') ||
    (player1 === 'paper' && player2 === 'spock') ||
    (player1 === 'scissors' && player2 === 'lizard') ||
    (player1 === 'rock' && player2 === 'lizard')
  ) {
    console.log(`You win round ${rounds}!`);
    return 'Player 1 Wins!';
  } else {
    console.log(`Player 2 wins round ${rounds}!`);
    return 'Player 2 Wins!';
  }
}

function score(winner) {
  if (winner === 'Player 1 Wins!') {
    player1Score++;
  } else if (winner === 'Player 2 Wins!') {
    player2Score++;
  }

  console.log(player1Score, player2Score);
  return player1Score, player2Score;
}
