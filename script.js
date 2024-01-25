let playerScore = 0;
let cpuScore = 0;
let roundCount = 1;

while (playerScore < 5 && cpuScore < 5) {
    playRound(playerScore, cpuScore, roundCount);
}

(playerScore >= 5) ? console.log("You Win!") : console.log("You Lose!");


function playRound(playerScore, cpuScore, roundCount) {
    console.group();
    console.log(`Round ${roundCount}:
                Player: ${playerScore}
                CPU: ${cpuScore}
                `);
    
    let playerChoice = prompt("Rock Paper Scissors!").toLowerCase();
    console.log(`You chose ${playerChoice}`);

    let cpuPick = Math.floor(Math.random() * 3);
    console.log('CPU chose ${stringifyRPS(cpuPick)}');

    let outcome = evalRound(enumerateRPS(playerChoice), cpuPick);

    if (outcome === 'win') {
        playerScore++;
    } else if (outcome === 'loss') {
        cpuScore++;
    }
    roundCount++;
    console.groupEnd();
}



function evalRound(playerPick, cpuPick) {
    if (playerPick === cpuPick) {
        return 'draw';
    } else if ((playerPick + 1) % 3 === cpuPick) {
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
            return undefined;
    }
}

function stringifyRPS(num) {
    switch (num){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return undefined;
    }
}
