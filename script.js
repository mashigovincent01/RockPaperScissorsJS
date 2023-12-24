
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
            result = "You win! Paper beats Rock";
        }
        else{
            result = "You Lose! Rock beats Scissors";
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
            result = "You Win! Scissors beats Paer";
        }
        else{
            result = "Tie";
        }
    }
    return result;
}

// var res = singleRound("rock", "rock") + "\n";
// res += singleRound("rock", "paper")+ "\n";
// res += singleRound("rock", "scissors")+ "\n";

// res += singleRound("paper", "rock")+ "\n";
// res += singleRound("paper", "paper")+ "\n";
// res += singleRound("paper", "scissors"+ "\n");

// res += singleRound("scissors", "rock")+ "\n";
// res += singleRound("scissors", "paper")+ "\n";
// res += singleRound("scissors", "scissors")+ "\n";



