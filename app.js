let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("score-u");
const compScore_span = document.getElementById("score-c");
const scoreTable_div = document.querySelector(".score-table");
const result_h1 = document.querySelector(".result > h1");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices]; //choices[0], choices[1], choices[2]
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_h1.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win !`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 300)
}

function lose(userChoice, computerChoice) {
     compScore++;
     userScore_span.innerHTML = userScore;
     compScore_span.innerHTML = compScore;
     const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
     result_h1.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost...`;
     document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 300)
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_h1.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord}. It's a draw !`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('gray-glow');
    }, 300)
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    })

    paper_div.addEventListener("click", function () {
        game("p");
    })

    scissors_div.addEventListener("click", function () {
        game("s");
    })
}

main();


