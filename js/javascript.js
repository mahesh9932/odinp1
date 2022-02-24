function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // rock > scisscor > paper
    if (playerSelection == computerSelection) {
        return `${playerSelection} and ${computerSelection} are equal so Tie..`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissor' && computerSelection == 'paper' ||
        playerSelection == 'rock' && computerSelection == 'scissor') {
        return `${playerSelection} beats ${computerSelection} You win!!`;
    }
    else {
        return `${playerSelection} can't beat ${computerSelection} You Lose..`;
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('please enter rock, paper or scissor');
        console.log(playRound(playerSelection, computerPlay()));
    }
}