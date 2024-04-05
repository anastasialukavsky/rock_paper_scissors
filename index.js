// console.log('hello world');

const prompt = require('prompt-sync')();
let rounds = 1;
let player1Score = 0;
let player2Score = 0;
let isContinuePlaying = true;

while (isContinuePlaying) {
  // const player1RandomChoice = randomChoice();
  let playerChoice = prompt(
    'Please choose rock, paper or scissors: '
  ).toLowerCase();
  // console.log({ playerChoice });
  while (
    playerChoice !== 'rock' &&
    playerChoice !== 'paper' &&
    playerChoice !== 'scissors'
  ) {
    playerChoice = prompt(
      'Invalid option! Please choose rock, paper or scissors:'
    );
  }

  const player2RandomChoice = randomChoice();

  const roundWinner = winner(playerChoice, player2RandomChoice);
  score(roundWinner);

  if (rounds === 10) {
    console.log(
      `FINAL SCORE:\nPlayer 1: ${player1Score}\nPlayer 2: ${player2Score}`
    );

    if (player1Score > player2Score) {
      console.log('You Win!');
    } else if (player2Score > player1Score) {
      console.log('Player 2 Wins!');
    } else {
      console.log("It's a tie!");
    }
  }

  rounds++;

  let keepPlaying = prompt(
    "Would you like to continue playing? Please enter 'yes' or 'no': "
  ).toLowerCase();

  while (keepPlaying !== 'yes' && keepPlaying !== 'no') {
    keepPlaying = prompt(
      "Invalid answer. Please enter 'yes' or 'no': "
    ).toLowerCase();

    if (keepPlaying === 'no') {
      isContinuePlaying = false;
    }
  }


}

function randomChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    console.log(`Player 2 chose rock`);
    return 'rock';
  } else if (choice === 1) {
    console.log(`Player 2 chose paper`);
    return 'paper';
  } else {
    console.log(`Player 2 chose scisssors`);
    return 'scissors';
  }
}

function winner(player1, player2) {
  if (player1 === player2) {
    console.log("It's a tie");
    return "It's a tie";
  } else if (
    (player1 === 'rock' && player2 === 'scissors') ||
    (player1 === 'scissors' && player2 === 'paper') ||
    (player1 === 'paper' && player2 === 'rock')
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

// score("It's a tie");
// score("Player 2 Wins!");
// score("Player 2 Wins!");
// score("Player 1 Wins!");

// let player1 = randomChoice();
// let player2 = randomChoice();
// let result = winner(player1, player2);
// score(result);

// let player3 = randomChoice();
// let player4 = randomChoice();
// let result1 = winner(player3, player4);
// score(result1);

// let player5 = randomChoice();
// let player6 = randomChoice();
// let result2 = winner(player5, player6);
// score(result2);

// console.log(player1, player2, result)

// randomChoice();
// winner("rock", "rock");
// winner("rock", "paper");
// winner("paper", "rock");
// winner("rock", "scissors");
