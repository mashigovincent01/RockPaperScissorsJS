

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper", "Scissors"];
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
   var result = singleRound("rock", getComputerChoice());
    document.querySelector("#result").innerHTML = result;
});

document.querySelector("#paper").addEventListener("click", ()=>{
    var result = singleRound("paper", getComputerChoice());
    document.querySelector("#result").innerHTML = result;
});

document.querySelector("#scissors").addEventListener("click", ()=>{
    var result = singleRound("scissors", getComputerChoice());
    document.querySelector("#result").innerHTML = result;
});

function updateScore(res){
    if(res === 'Tie'){
        return;
    }
    if(res[4] === 'L'){
        computerScore++;
    }
    else{
        userScore++;
    }
}



