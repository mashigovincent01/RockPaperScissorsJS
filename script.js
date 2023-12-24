
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

function game(){
    var count = 0;
    var user = 0;
    var computer = 0;
    var message = "";
    while(count != 5){
        console.log(`ROUND: ${count}`);
        var userOption = prompt("Enter Rock, Paper or Scissors:").trim().toLowerCase();
        if(userOption === "rock" || userOption === "paper" || userOption === "scissors"){
            message = singleRound(user, getComputerChoice());
            if(message === 'Tie'){

            }
            else if(message[4] === 'L'){
                computer++;
                count++;
            }
            else{
                user++;
                count++;
            }
            
        }
        else{
            alert("Invalid input, must be rock, paper or scissors");
            userOption = prompt("Enter rock, paper or scissors");
        }
    }
    alert("Computer Score " + computer);
    alert("User Score: " + user);
}
game();
// var res = singleRound("rock", "rock") + "\n";
// res += singleRound("rock", "paper")+ "\n";
// res += singleRound("rock", "scissors")+ "\n";

// res += singleRound("paper", "rock")+ "\n";
// res += singleRound("paper", "paper")+ "\n";
// res += singleRound("paper", "scissors"+ "\n");

// res += singleRound("scissors", "rock")+ "\n";
// res += singleRound("scissors", "paper")+ "\n";
// res += singleRound("scissors", "scissors")+ "\n";



