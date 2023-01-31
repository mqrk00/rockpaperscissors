let playerCounter=0;
let computerCounter=0;

const txt = document.getElementById("txt");
const playerScore = document.getElementById("playerCounter");
const compScore = document.getElementById("computerCounter");
const prekrij = document.querySelector("#prekrij");
const prekrijP = document.querySelector("#prekrij-p");


const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach(butt => butt.addEventListener("click",playRound));



function getComputerChoice()
{

    let strings = ["Rock","Paper","Scissors"];

    let randomIndex = Math.floor(Math.random() * strings.length); 
    let randomString = strings[randomIndex];
    let random = randomString.toLowerCase();
    return random;
}

function playRound(e)
{

    
    let playerSelection=0;
    if(e.target.id == "rock")
         playerSelection = "rock";

    else if(e.target.id =="paper")
        playerSelection = "paper";

    else if(e.target.id == "scissors")
        playerSelection = "scissors";

        let computerSelection = getComputerChoice();
    

    if(playerSelection == computerSelection)
    {  txt.textContent = "Its a tie";
            
            
        }


   if(playerSelection == "rock"){
   switch(computerSelection)
   {
    case "paper":
        txt.textContent = "You lose";
        break;
        
     case "scissors":
      txt.textContent = "You Win";
     break;
        
    
   }
}
   else if(playerSelection == "paper"){
    switch(computerSelection)
    {
     case "rock":
        txt.textContent = "You Win";
        break;
      case "scissors":
        txt.textContent = "You lose";
        break;
     
    }
}
    else if(playerSelection == "scissors"){
        switch(computerSelection)
        {
         case "rock":
            txt.textContent = "You lose";
            break;
          case "paper":
            txt.textContent = "You Win";

            break;
         
        }
    }
    roundWinCounter();
    gameWinner();    
    score();    

        
            
}

function score()
{
    playerScore.textContent = playerCounter;
    compScore.textContent = computerCounter;
}

function roundWinCounter()
{
    
    if(txt.textContent == "You Win")
        playerCounter++;
        if(txt.textContent == "You lose")
        computerCounter++;
        
}
function gameWinner()
{

    
    
    if(playerCounter == 5 && playerCounter > computerCounter)
    {
        prekrij.classList.add("prekrij");
        prekrijP.classList.add("prekrij-p");

        prekrijP.textContent= "You won the game!Press Enter to play again";
        playerCounter = 0,computerCounter = 0;  
        newGame();
        
    }
     else if(computerCounter == 5 && computerCounter > playerCounter)
     {

        prekrij.classList.add("prekrij");
        prekrijP.classList.add("prekrij-p");

        prekrijP.textContent= "You lost the game!Press Enter to play again";
        playerCounter = 0,computerCounter = 0;
        newGame();
       
     }
        

}


function newGame()
{
    window.addEventListener("keydown",(event) =>{
        if(event.keyCode === 13)
        {
            prekrij.classList.remove("prekrij");
            prekrijP.textContent= "";
            txt.textContent = "";
        }
    });
}






