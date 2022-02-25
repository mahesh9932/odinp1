let count = 0;
let score = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return `${playerSelection} and ${computerSelection} are equal so Tie.. and score is ${score}`;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissor' && computerSelection == 'paper' ||
        playerSelection == 'rock' && computerSelection == 'scissor') {
        score +=1;
        return `${playerSelection} beats ${computerSelection} You win!! and score is ${score}`;
    }
    else {
        return `${playerSelection} can't beat ${computerSelection} You Lose.. and score is ${score}`;
    }

}

Array.from(document.querySelectorAll('button')).forEach(
    btn => btn.addEventListener('click', e => {
        count += 1;
        document.querySelector('div').innerText = playRound(e.target.innerHTML, computerPlay());
        if(count == 5) {
            document.querySelector('div').innerText = (score > 2)?`score is ${score} You win!!`:`score is ${score} You Lose!!`;
            score = 0;
            count = 0;
        }
    }));
