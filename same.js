let userScore=0;
let computerScore=0;


 const choices=document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScorepara=document.querySelector("#user-scoure");
 const compScorepara=document.querySelector("#Computer-scoure");
 
 const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
 };
 const drawGame=()=>{
    console.log("game was draw.")
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";

 };

 const showWinner=(userWin , userChoice , compuChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;

        console.log("you win.")
      msg.innerText = "You win.";
      msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compScorepara.innerText=computerScore;
        console.log("you lose.")
        msg.innerText = "You lose.";
      msg.style.backgroundColor = "red";

    }
 };
 const playGame=(userChoice)=>{
   
      const compuChoice=genCompChoice();
      if(userChoice===compuChoice){
        drawGame();
      }
      else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compuChoice ==="paper" ? false:true;

        }
        else if(userChoice==="paper"){
            userWin=compuChoice==="scissors"?false:true;

        }
        else{
            userWin=compuChoice==="rock"?false:true;
        }
        showWinner(userWin ,userChoice ,compuChoice)
      }
 };
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       
        playGame(userChoice);
    });
 });