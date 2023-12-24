
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[computerChoice];
}

alert(getComputerChoice());

