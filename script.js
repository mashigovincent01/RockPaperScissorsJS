
let isTimerRunning = false;
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    const choices = ["rock", "paper", "scissors"];
    return choices[computerChoice];
}


function singleRound(playerSelection, computerSelection){
    let result = "";
    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "rock"){
            result = "Tie";
        }
        else if(computerSelection.toLowerCase() === "paper"){
            result = "You Lose! Paper beats Rock";
        }
        else{
            result = "You Win! Rock beats Scissors";
        }
    }
    else if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection.toLowerCase() === "rock"){
            result = "You win! Paper beats Rock";
        }
        else if(computerSelection.toLowerCase() === "paper"){
            result = "Tie";
        }
        else{
            result = "You Loose! Scissors beats Paper";
        }
    }
    else{
        if(computerSelection.toLowerCase() === "rock"){
            result = "You Lose! Rock beats Scissors"
        }
        else if(computerSelection.toLowerCase() === "paper"){
            result = "You Win! Scissors beats Paper";
        }
        else{
            result = "Tie";
        }
    }
    return result;
}

var userScore = 0;
var computerScore = 0;

document.querySelector("#rock").addEventListener("click", ()=>{
   document.getElementById("user-choice").innerHTML = "";
   var compChoice = getComputerChoice();
   var result = singleRound("rock", compChoice);
   timer(0, result, compChoice);
});

document.querySelector("#paper").addEventListener("click", ()=>{
    document.getElementById("user-choice").innerHTML = "";
    var compChoice = getComputerChoice();
    var result = singleRound("paper", compChoice);
    timer(1, result, compChoice);
    
});

document.querySelector("#scissors").addEventListener("click", ()=>{
    document.getElementById("user-choice").innerHTML = "";
    var compChoice = getComputerChoice();
    var result = singleRound("scissors", compChoice);
    timer(2, result, compChoice);
});

function finalUpdate(choice, res, compChoice){
    updateUserChoice(choice);
    updateComputerChoice(compChoice);
    updateScore(res);
    // alert(`User Score: ${userScore} + \n Computer Score: ${computerScore}`)
    document.querySelector("#result").innerHTML = res;
    isGameOver();
    
}

var index = 0;
function computerOutput(){
    let element = document.getElementById("computer-choice");
    element.innerHTML = options[index];
    index = (index+1)% options.length;
}

const options = ["✊", "✋", "✌️"];


function timer(choice, res, compChoice){

    if(userScore !== 5 && computerScore !==5){
        const intervalId = setInterval(computerOutput, 100);
        setTimeout(()=>{
            clearInterval(intervalId);
            finalUpdate(choice, res, compChoice);
        }, 1000);
    }
}


function updateScore(res){
    if(computerScore !== 5 && userScore !== 5){
        if(res === 'Tie'){
            return;
        }
        if(res[4] === 'L'){
            computerScore++;
        }
        else{
            userScore++;
        }
        document.querySelector("#userScore").innerHTML = userScore;
        document.querySelector("#computerScore").innerHTML = computerScore;
    }
}

function isGameOver(){
    if(userScore === 5){
        
        res = "Congradulations you won!";
    }
    else if(computerScore === 5){

        res = "Sorry you lost!";
    }
    else{
        return
    }
    alert(res);
    // document.querySelector("h1").innerHTML = res;
    document.querySelector("#result").innerHTML = res;
    return
}


function updateUserChoice(i){
    document.getElementById("user-choice").innerHTML = options[i];
}

function updateComputerChoice(choice){
    let i = 0;
    
    if(choice === "paper"){
        i = 1;
    }
    else if(choice === "scissors"){
        i = 2;
    }

    document.getElementById("computer-choice").innerHTML = options[i];
    
}
