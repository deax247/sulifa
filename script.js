let humanScore = 0
let computerScore = 0 

function getComputerChoice() {
    let x = (floor(Math.random() * 2)) + 1;

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


function playRound(humanChoice , computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if humanChoice != "rock" || humanChoice != "paper" || humanChoice != "scissors" {
        alert("wrong input")
        return
    }

    let humanChoice
}