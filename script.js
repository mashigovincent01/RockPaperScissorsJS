
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

function game(){
    var count = 0;
    var user = 0;
    var computer = 0;
    var message = "";
    while(user !== 5 && computer !== 5){
        console.log(`ROUND: ${count}`);
        var userOption = prompt("Enter Rock, Paper or Scissors:").trim();
        if(userOption === "rock" || userOption === "paper" || userOption === "scissors"){
            let computerOption =getComputerChoice();
            message = singleRound(userOption, computerOption);
            
            console.log("Your option: " + userOption);
            console.log("Computer Option: " + computerOption)
            
            if(message === 'Tie'){
                console.log(message + ". Try again");
            }
            else if(message[4] === 'L'){
                console.log(message);
                computer++;
                count++;
            }
            else{
                console.log(message);
                user++;
                count++;
            }
            
        }
        else{
            alert("Invalid input, must be rock, paper or scissors");
            userOption = prompt("Enter rock, paper or scissors");
        }
    }
    console.log("RESULTS");
    console.log("User score: " + user);
    console.log("Computer score: " + computer);
}
game();




