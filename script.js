let choseRock = 0;
let chosePaper = 0;
let choseScissors = 0;

let won = 0;
let tied = 0;
let lost = 0;

let playerChoice = null;
let botChoice = null;

let rngZero = 0;
let rngOne = 0;
let rngTwo = 0;


//Prompt player to make a choice
function choose(){
    playerChoice = prompt("Type R, P, or S to choose rock paper or scissors");
    playerChoice = playerChoice.toUpperCase();
    if(playerChoice == "R"){
        choseRock++;
        judge();
    }else if(playerChoice == "P"){
        chosePaper++;
        judge();
    }else if (playerChoice == "S"){
        choseScissors++;
        judge();
    }else{
        alert("Invalid choice");
        choose();
    }
};

//Judge if player won or lost
function judge(){
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        botChoice = "R";
    } else if(randomNumber == 1){
        botChoice = "P";
    } else if(randomNumber == 2){
        botChoice = "S";
    } else{
        alert("Bot choice error");
        console.log(`${randomNumber}`)
    }

    if(playerChoice == botChoice){
        tied++;
        alert("Tie game! ⚖");
    } else if(playerChoice == "R" && botChoice == "P") {
        lost++;
        alert("Bot chose paper. You lost... 😔");
    } else if(playerChoice == "R" && botChoice == "S") {
        won++;
        alert("Bot chose scissors. You win! 🎉");
    } else if(playerChoice == "P" && botChoice == "R") {
        won++;
        alert("Bot chose rock. You win! 🎉");
    } else if(playerChoice == "P" && botChoice == "S") {
        lost++;
        alert("Bot chose scissors. You lost... 😔");
    } else if(playerChoice == "S" && botChoice == "R") {
        lost++;
        alert("Bot chose rock. You lost... 😔");
    } else if(playerChoice == "S" && botChoice == "P") {
        won++;
        alert("Bot chose paper. You win! 🎉");
    } else {
        alert("Judging error")
    }

    ask();
};

//Ask if player would like to play again
function ask(){
    if(confirm("Play again?")){
        choose();
    } else{
        alert(`            Statistics

            Wins: ${won}
            Losses: ${lost}
            Ties: ${tied}
            
            Times you chose rock: ${choseRock}
            Times you chose paper: ${chosePaper}
            Times you chose scissors: ${choseScissors}`);
    }
};

// Test to make sure RNG worked correctly
/* for(let i = 0; i < 1000000; i++){
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        rngZero++;
    } else if(randomNumber == 1){
        rngOne++;
    } else if(randomNumber == 2){
        rngTwo++;
    } else{
        alert("RNG error");
        console.log(`${randomNumber}`)
    };
};
console.log(`zeroes: ${rngZero}
ones: ${rngOne}
twos: ${rngTwo}`); */

choose();