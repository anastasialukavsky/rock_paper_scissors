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

randomChoice();