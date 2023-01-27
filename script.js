function getComputerChoice()
{

    let strings = ["Rock","Paper","Scissors"];

    let randomIndex = Math.floor(Math.random() * strings.length); 
    let randomString = strings[randomIndex];
    let random = randomString.toLowerCase();
    return random;
}

function playRound(playerSelection, computerSelection)
{
    let player = playerSelection.toLowerCase();
    
    

    if(player == computerSelection)
            return "Its a tie!";

 
   if(player == "rock"){
   switch(computerSelection)
   {
    case "paper":
        return "You lose!Paper beats rock";
     case "scissors":
        return "You win!Rock beats scissors";
    
   }
}
   else if(player == "paper"){
    switch(computerSelection)
    {
     case "rock":
         return "You win!Paper beats rock";
      case "scissors":
         return "You lose!Scissors beats paper";
     
    }
}
    else if(player == "scissors"){
        switch(computerSelection)
        {
         case "rock":
             return "You lose!Rock beats scissors";
          case "paper":
             return "You win!Scissors beats paper";
         
        }
    }
}



let playerSelection = 0;
let computerSelection = 0;

let playerCounter=0;
let computerCounter=0;





function game()
{
   
    for(let i = 0;i<5;i++)
    {
        playerSelection = prompt();
        computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection,computerSelection));
        if(playRound(playerSelection,computerSelection).includes("lose"))
            computerCounter++;
        
        else if(playRound(playerSelection,computerSelection).includes("win"))
            playerCounter++;
        console.log(`Broj tvojih pobjeda: ${playerCounter}`);
        console.log(`Broj kompjuterovih pobjeda: ${computerCounter}`);
        

        
      
            
        
        
    }
    
  if(playerCounter > computerCounter)
    console.log("Pobijedili ste!"); 
    else if(playerCounter < computerCounter)
    console.log("Izgubili ste!");
else if (playerCounter == computerCounter)
    console.log("Izjednaceno");
    
}

game();