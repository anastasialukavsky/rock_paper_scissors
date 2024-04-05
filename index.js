// console.log('hello world');


function randomChoice() {
    let choice = Math.floor(Math.random() * 3);
    // console.log(choice);

    if (choice === 0) {
        // console.log("rock")
        return "rock"
    } else if (choice === 1) {
        // console.log('paper')
        return "paper"
    } else {
        // console.log('scissors')
        return "scissors"
    }
}

function winner(player1, player2) {

    if (player1 === player2) {
        // console.log("It's a tie");
        return "It's a tie";
    } else if ((player1 === "rock" && player2 === "scissors") || (player1 === "scissors" && player2 === 'paper') || (player1 === "paper" && player2 === "rock")) {
        // console.log('Player 1 Wins!');
        return "Player 1 Wins!";
    } else {
        // console.log("Player 2 Wins!");
        return "Player 2 Wins!";
    }
}


let player1Score = 0;
let player2Score = 0;

function score(winner) {

    if (winner === "Player 1 Wins!") {
        player1Score++
    } else if (winner === "Player 2 Wins!") {
        player2Score++
    } 

    console.log(player1Score, player2Score)
    return player1Score, player2Score
}


score("It's a tie");
score("Player 2 Wins!");
score("Player 2 Wins!");
score("Player 1 Wins!");


// let player1 = randomChoice();
// let player2 = randomChoice();
// let result = winner(player1, player2);

// console.log(player1, player2, result)

// randomChoice();
// winner("rock", "rock");
// winner("rock", "paper");
// winner("paper", "rock");
// winner("rock", "scissors");