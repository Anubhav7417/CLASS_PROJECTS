let player = 0;
let computer = 0;
let round = 1;

function play(playerChoice) {
    if (round > 3) return;
    
    let choices = ['gun', 'water', 'snake'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    
    document.getElementById('pmove').textContent = playerChoice;
    document.getElementById('cmove').textContent = computerChoice;
    
    if (playerChoice === computerChoice) {
        document.getElementById('result').textContent = "Tie!";
    } else if (
        (playerChoice === 'gun' && computerChoice === 'snake') ||
        (playerChoice === 'water' && computerChoice === 'gun') ||
        (playerChoice === 'snake' && computerChoice === 'water')
    ) {
        document.getElementById('result').textContent = "You win!";
        player++;
        document.getElementById('player').textContent = player;
    } else {
        document.getElementById('result').textContent = "Computer wins!";
        computer++;
        document.getElementById('computer').textContent = computer;
    }
    
    round++;
    document.getElementById('round').textContent = round;
    
    if (round > 3) {
        if (player > computer) {
            document.getElementById('result').textContent = "You won the game!";
        } else if (computer > player) {
            document.getElementById('result').textContent = "Computer won the game!";
        } else {
            document.getElementById('result').textContent = "Game tied!";
        }
    }
}

function reset() {
    player = 0;
    computer = 0;
    round = 1;
    document.getElementById('player').textContent = '0';
    document.getElementById('computer').textContent = '0';
    document.getElementById('round').textContent = '1';
    document.getElementById('result').textContent = 'Click to play';
    document.getElementById('pmove').textContent = '-';
    document.getElementById('cmove').textContent = '-';
}
