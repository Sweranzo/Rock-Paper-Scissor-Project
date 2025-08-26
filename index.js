function getComputerChoice(computerMove){

    computerMove = Math.floor(Math.random() *10); 
    //console.log(computerMove);

    if (computerMove <= 4){
        computerMove = 'rock';
        //console.log('rock');
    }else if (computerMove <= 7){
        computerMove ='paper';
        //console.log('paper');
    }else if (computerMove <= 10){
        computerMove ='scissor';
        //console.log('scissor');
    }

        return computerMove;
}

let computerScore = 0;
let humanScore = 0;


function getHumanChoice(getUserInput){

    getUserInput = prompt('what is your best shot? rock paper or scissors?'); 

    return getUserInput;
}


function playGame(){

    let computerMove = getComputerChoice();
    let humanMove = getHumanChoice();   
    let result ='';
    
    if (humanMove.toLowerCase() === computerMove) {
        result = 'tie'; 
        console.log('tie');
    }else if(humanMove.toLowerCase() === 'paper' && computerMove === 'rock' || humanMove.toLowerCase() === 'rock' && computerMove === 'scissor' || humanMove.toLowerCase() === 'scissor' && computerMove === 'paper'){

        result ='you won!';
        console.log('you won!');
    }else {
        result ='computer won';
        console.log('computer won!');
    } 
    if (result === 'you won!') {

        humanScore ++; 
    }else if (result === 'computer won'){
        
        computerScore ++;
    
    }

    alert(`you choose ${humanMove} and computer choose ${computerMove} therefore ${result}.\nhuman: ${humanScore}
computer:${computerScore}`);

    return {computerMove, result, humanMove};

}


function playRound(){

    let rounds = playGame;
    let finalResult ='';
    for(let i = 0; i < 5; i++){
       rounds();
    } if (humanScore > computerScore){
        finalResult = 'HUMAN WON';
    }else {
        finalResult = 'COMPUTER WON!';
    }
        
    alert (`Final score is:\nHuman score:${humanScore}\nComputer score:${computerScore}\n${finalResult}`);

}playRound(); 