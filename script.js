let playerScore = 0;
let cpuScore = 0;
let roundCount = 1;

const outputPanel = document.querySelector('div.output-panel');
const roundPanel = document.querySelector('div span#round-number');
const playerScorePanel = document.querySelector('div span#player-score');
const cpuScorePanel = document.querySelector('div span#cpu-score');
const playerChoicePanel = document.querySelector('div span#player-choice');
const cpuChoicePanel = document.querySelector('div span#cpu-choice');
const resultPanel = document.querySelector('div span#result');


const buttonPanel = document.querySelector("div.button-panel");
buttonPanel.addEventListener('click', (e) => {
    if (playerScore < 5 && cpuScore < 5) {
    switch(e.target.id) {
        case 'rock':
            playRound('rock')
            break;
        case 'paper':
            playRound('paper');
            break;
        case 'scissors':
            playRound('scissors');
            break;
        default:
            break;
        }
    } 
});




function playRound(playerChoice) {
    roundPanel.textContent = roundCount;
    playerScorePanel.style.color = '';
    cpuScorePanel.style.color = '';
    
    let cpuPick = Math.floor(Math.random() * 3);

    playerChoicePanel.textContent = playerChoice.toString().toUpperCase();
    cpuChoicePanel.textContent = stringifyRPS(cpuPick).toUpperCase();
    
    let outcome = evalRound(enumerateRPS(playerChoice), cpuPick);
    
    if (outcome === 'win') {
        playerScore++;
        playerScorePanel.style.color = 'green';
    } else if (outcome === 'loss') {
        cpuScore++;
        cpuScorePanel.style.color = 'green';

    }

    playerScorePanel.textContent = playerScore;
    cpuScorePanel.textContent = cpuScore;

    if (playerScore >= 5) {
        resultPanel.textContent = "You Win!";
    } else if (cpuScore >= 5) {
        resultPanel.textContent = "You Lose!";
    }
    roundCount++;
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
