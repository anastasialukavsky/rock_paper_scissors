console.log('hello world');


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
        console.log("It's a tie");
        return "It's a tie";
    } else if ((player1 === "rock" && player2 === "scissors") || (player1 === "scissors" && player2 === 'paper') || (player1 === "paper" && player2 === "rock")) {
        console.log('Player 1 Wins!');
        return "Player 1 Wins!";
    } else {
        console.log("Player 2 Wins!");
        return "Player 2 Wins!";
    }
}




randomChoice();