msg1 = document.getElementById('msg1');
msg2 = document.getElementById('msg2');
buttons = document.querySelectorAll('button')

let score = 0;
let comScore = 0;
let gameOver = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (gameOver === true) {
            return;
        }

        let guess = Math.floor(Math.random()*3)+1;

        if (guess === 1) {
            guess = "ROCK";
        } else if (guess === 2) {
            guess = "PAPER";
        } else {
            guess = "SCISSORS";
        }

        let value = button.textContent;

        if (((value === "ROCK") && (guess === "PAPER")) || ((value === "PAPER") && (guess === "SCISSORS")) || ((value === "SCISSORS") && (guess === "ROCK"))) {
            comScore += 1;
            console.log("comScore: " + comScore);
            console.log("score: " + score);
        } else if (((value === "PAPER") && (guess === "ROCK")) || ((value === "SCISSORS") && (guess === "PAPER")) || ((value === "ROCK") && (guess === "SCISSORS"))) {
            score += 1;
            console.log("score: " + score);
            console.log("comScore: " + comScore);
        }
        console.log(guess);
        msg3.textContent = "COMPUTER CHOICE: " + guess;
        msg1.textContent = "SCORE: " + score;
        msg2.textContent = "COMPUTER: " + comScore;
        
        if (score === 10) {
            console.log('you won!');
            winner.textContent = "YOU WON!";
            gameOver = true;
        } else if (comScore === 10) {
            console.log('you lost!');
            winner.textContent = "YOU LOST!"
            gameOver = true;
        }

    });

});