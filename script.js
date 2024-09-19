let userScore=0;
let compScore=0;

let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let userScoreBoard=document.querySelector("#user-score");
let compScoreBoard= document.querySelector("#comp-score");

//user choice slection portion
choice.forEach((choice)=>{
choice.addEventListener("click", ()=>{
   let userChoice = choice.getAttribute("id");
playGame (userChoice);
});
});

//computer choice selection portion
const genCompChoice=()=>{
   let choices = ["rock", "paper", "scissor"];
   let randIndx= Math.floor(Math.random()*3);
   return choices[randIndx];
}

// user and computer choice comparison portion
const playGame=(userChoice)=>{
   console.log("user choice = ", userChoice);
   const compChoice = genCompChoice();
   console.log("computer choice =", compChoice);

   if(userChoice===compChoice){
      drawGame();
   }
   else{
      let userWin=true;
      if (userChoice==="rock"){
         if (compChoice==="paper"){
            userWin=false;
         }
         else{
            userWin=true;
         }
      }

      else if(userChoice==="paper"){
         if(compChoice==="rock"){
            userWin=true;
         }
         else{
            userWin=false;
         }
      }

      else{
         if (compChoice==="paper"){
            userWin=true;
         }
         else{
            userWin=false;
         }
      }
      showWinner(userWin, userChoice,compChoice);
   }
}

const drawGame=()=>{
   console.log("game was draw");
   msg.innerText="Game drawn, Play again";
   msgContainer.style.backgroundColor="#081b31";
}


//displaying the winner portion
const showWinner=(userWin, userChoice, compChoice)=>{
   if(userWin){
      userScore++;
      userScoreBoard.innerText = userScore;
      console.log("you won!");
      msg.innerText= `you won! as ${userChoice} beats ${compChoice}`;
      msgContainer.style.backgroundColor="green";
   }
   else{
      compScore++;
      compScoreBoard.innerText = compScore;
      console.log("you lose..");
      msg.innerText=`You lose as ${compChoice} beats ${userChoice}`;
      msgContainer.style.backgroundColor="red";
   }
};