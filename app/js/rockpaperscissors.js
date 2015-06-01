////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    return move || getInput();
}


function getComputerMove(move) {
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
   
   if(playerMove === computerMove){
       return "tie";
   }else if(playerMove === "paper" && computerMove === "rock"){
       console.log("* Paper covers Rock *");
       return "player";
   }else if(playerMove === "paper" && computerMove === "scissors"){
       console.log("* Scissors cuts Paper *");
       return "computer";
   }else if(playerMove === "scissors" && computerMove === "paper"){
       console.log("* Scissors cuts Paper *");
       return "player";
   }else if(playerMove === "scissors" && computerMove === "rock"){
       console.log("* Rock crushes Scissors *");
       return "computer";
   }else if(playerMove === "rock" && computerMove === "scissors"){
       console.log("* Rock crushes Scissors *");
       return "player";
   }else if(playerMove === "rock" && computerMove === "paper"){
       console.log("* Paper covers Rock *");
       return "computer";
   }
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0;
    var computerWins = 0;
    
    while(true){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();   
        var winner = getWinner(playerMove,computerMove);
        
        if (winner === "player") {
            playerWins += 1;
        }else if (winner === "computer") {
            computerWins += 1;
        } 
        
        console.log("You chose " + playerMove + " while the computer chose " + computerMove + ".");
        console.log("Round Winner is: " + winner + ".");
        console.log("The score is currently " + playerWins + " to " + computerWins + ".\n");
    
      
        if(playerWins === 5){
            console.log("PLAYER WINS GAME!!!!");
            return [playerWins, computerWins];
        }else if(computerWins === 5){
            console.log("COMPUTER WINS GAME!!!");
            return [playerWins, computerWins];
        }
            
    }
}
       
         
         
playToFive();



//Kevin Huelsmann