let userScore = 0;
let compScore = 0;
let disUserScore = document.querySelector("#user-score");
let disCompScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-game-btn");
userWin=(userChoice,compChoice)=>{
    msg.style.color = "black";
    msg.style.backgroundColor = "green";
    msg.innerText = `Win!, ${userChoice} beats ${compChoice}`;
    disUserScore.innerText = userScore;
}
compWin=(userChoice,compChoice)=>{
    msg.style.color = "black";
    msg.style.backgroundColor = "red";
    msg.innerText = `Lose!, ${compChoice} beats ${userChoice}`;
    disCompScore.innerText = compScore;
}
Draw=(userChoice,compChoice)=>{
    msg.style.color = "black";
    msg.style.backgroundColor = "yellow";
    msg.innerText = "Draw";
}
const Winner=(userChoice,compChoice)=>{
    if(userChoice==="rock"){
        if(compChoice==="scissors"){
            userScore++;
            userWin(userChoice,compChoice);
        }
        else if(compChoice=="paper"){
            compScore++
            compWin(userChoice,compChoice);
        }
        else{
            compScore = compScore;
            userScore = userScore;
            Draw(userChoice,compChoice);
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="scissors"){
            compScore++;
            compWin(userChoice,compChoice);
        }
        else if(compChoice=="paper"){
            compScore = compScore;
            userScore = userScore;
            Draw(userChoice,compChoice);
        }
        else{
            userScore++;
            userWin(userChoice,compChoice);
        }
    }
    else{
        if(compChoice==="scissors"){
            compScore = compScore;
            userScore = userScore;
            Draw(userChoice,compChoice);
        }
        else if(compChoice=="paper"){
           userScore++
           userWin(userChoice,compChoice);
        }
        else{
            compScore++;
            compWin(userChoice,compChoice);
        }
    }
}
const genCompChoice = ()=>{
    const option = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    let compChoice = option[index];
    return compChoice;
}
const playGame=(userChoice)=>{
    console.log(`User choice: ${userChoice}`);
    //Generate Computer Choice
    let compChoice = genCompChoice();
    Winner(userChoice,compChoice);
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
const NewGame=()=>{
    userScore = 0;
    compScore = 0;
    disCompScore.innerText = compScore;
    disUserScore.innerText = userScore;
    msg.style.backgroundColor = " #081b31";
    msg.innerText = "Play your move";
    msg.style.color = "white";
}
newGame.addEventListener("click",()=>{
    NewGame();
});