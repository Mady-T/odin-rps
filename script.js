function playRound(playerScore, cpuScore, roundNumber) {
    let outcome = evalRound(
        () => prompt("Rock Paper Scissors!").toLowerCase(),
        () => Math.floor(Math.random() * 3)
    );
    if (outcome === 'win') {
        playerScore++;
    } else if (outcome === 'loss') {
        cpuScore++;
    }
}


function evalRound(playerPick, cpuPick) {
    let playerChoice = enumerateRPS(playerPick());
    let cpuChoice = cpuPick();
    if (playerChoice === cpuChoice) {
        return 'draw';
    } else if ((playerChoice + 1) % 3 === cpuChoice) {
        return 'loss';
    } else {
        return 'win';
    }
}

function enumerateRPS(string) {
    switch (string){
        case 'rock':
            return 0;
        case 'paper':
        case 'papers':
            return 1;
        case 'scissors':
        case 'scissor':
            return 2;
        default:
            return null;
    }
}