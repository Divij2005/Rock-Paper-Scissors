let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userS = document.querySelector("#userScore");
let compS = document.querySelector("#compScore");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame = (userChoice) =>{
    let compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        userWin = true;
        if (userChoice === "rock")
            userWin = compChoice === "paper" ? false : true ;
        else if(userChoice === "paper")
            userWin = compChoice === "rock" ? true : false ;
        else {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScore++;
        userS.innerText = userScore;
    } else {
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScore++;
        compS.innerText = compScore;
    }
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const genCompChoice = () => {
    let choices = ["rock" , "paper" , "scissors"];
    let choicesIdx = Math.floor(Math.random() * 3);
    return choices[choicesIdx];
}