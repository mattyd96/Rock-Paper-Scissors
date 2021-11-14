var score = 0;


function random3() {
    return Math.floor(Math.random() * 3);
}

function getComputerMove() {
    var moves = ["rock", "paper", "scissors"];
    return moves[random3()];
}

function match(playerMove, computerMove) {

    if(playerMove == computerMove) {return 2;}
    
    switch (playerMove) {
        case "rock":
            if(computerMove == "paper") {return 0;}
            else {return 1;}   
            break;
        
        case "paper":
            if(computerMove == "scissors") {return 0;}
            else {return 1;}
            break;

        case "scissors":
            if(computerMove == "rock") {return 0;}
            else {return 1;}
            break;
    
        default:
            break;
    }
}

function createSelectionHTML(selection) {
    return '<div class="hand ' + selection + '"><div class="bg-circle ' + selection + '-bg"></div><button disabled><img src="images/icon-'+ selection + '.svg" alt="' + selection + '"></button></div>';
}

function createWinnerHTML(selection) {
    return '<div class="hand ' + selection + '"><div class="win-circle"></div><div class="bg-circle ' + selection + '-bg"></div><button disabled><img src="images/icon-'+ selection + '.svg" alt="' + selection + '"></button></div>';
}

function play(move) {

    var computerMove = getComputerMove();
    console.log("player move: " + move);
    console.log("computer move: " + computerMove);

    var result = match(move, computerMove);


    //go to next screen
    //show player selection
    var player = document.getElementsByClassName("player");
    var computer = document.getElementsByClassName("computer");
    var HTML = createSelectionHTML(move);
    var HTMLComputer = createSelectionHTML(computerMove);

    player[0].innerHTML = HTML;
    document.getElementsByClassName("original")[0].style.display = "none";
    document.getElementsByClassName("step-2")[0].style.display = "flex";

    setTimeout(function() {  
        computer[0].innerHTML = HTMLComputer;
    }, 2000);


    //prepare next step
    var resultText = document.getElementById("result");
    var scoreText = document.getElementsByClassName("score-total")[0];

    if(result == 1) {
        player[1].innerHTML = createWinnerHTML(move);
        computer[1].innerHTML = HTMLComputer;
        resultText.textContent = "YOU WIN";
        score++;
        
    } else if(result == 0) {
        player[1].innerHTML = HTML;
        computer[1].innerHTML = createWinnerHTML(computerMove);
        resultText.textContent = "YOU LOSE";
        score--;
    } else {
        player[1].innerHTML = HTML;
        computer[1].innerHTML = HTMLComputer;
        resultText.textContent = "DRAW";
    }
    

    //announce winner -> go to step 3
    setTimeout(function() {
        scoreText.textContent = score.toString();
        document.getElementsByClassName("step-2")[0].style.display = "none";
        document.getElementsByClassName("step-3")[0].style.display = "flex";
    }, 4000);



    //show computer selection

    //announce winner

    //ask to play again
}


function playAgain() {
    document.getElementsByClassName("computer")[0].innerHTML = '<div class="dark-circle"></div>'
    document.getElementsByClassName("step-3")[0].style.display = "none";
    document.getElementsByClassName("original")[0].style.display = "grid";
}


function displayRules() {
    document.getElementsByClassName("rule-modal")[0].classList.toggle("display");
}

