function getComputerChoice() {
    let x = Math.floor(Math.random() * 3 + 1);

    if (x == 1) {
        return "rock"
    } else if (x == 2) {
        return "paper"
    } else if (x == 3) {
        return "scissors"
    } else {
        alert("Smth's off...")
    }
}

function getHumanChoice() {
    return prompt("Rock? Paper? Scissors?")
}




function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let hc = getHumanChoice()
        let cc = getComputerChoice()

        hc = hc.toLowerCase()
        if (hc != "rock" && hc != "paper" && hc != "scissors") {
            alert("wrong input")
            return
        }

        if (hc == "rock" && cc == "rock") {
            console.log("It's a tie!");
        } else if (hc == "rock" && cc == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++
        } else if (hc == "rock" && cc == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++
        } else if (hc == "paper" && cc == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++
        } else if (hc == "paper" && cc == "paper") {
            console.log("It's a tie!");
        } else if (hc == "paper" && cc == "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++
        } else if (hc == "scissors" && cc == "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++
        } else if (hc == "scissors" && cc == "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++
        } else if (hc == "scissors" && cc == "scissors") {
            console.log("It's a tie!");
        } else {
            alert("Smth's off...")
        }
        console.log("Human score: " + humanScore + "\nComputer score: " + computerScore);
    }

    while (humanScore < 3 && computerScore < 3) {
        playRound();
    }

    if (humanScore === 3) {
        console.log("🎉 You won the game!");
    } else {
        console.log("💻 Computer won the game!");
    }


}


playGame();

