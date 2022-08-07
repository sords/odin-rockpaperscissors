
let playerwon = 0;
let computerwon = 0;


function getComputerChoice() {
    const compchoice = ['rock' , 'paper' , 'scissors'];
    return (compchoice[Math.floor(Math.random() * 3)])
}
function singleround(computerChoice, playerChoice){
      const rules = {
        'rock':'scissors',
        'scissors':'paper',
        'paper':'rock'
      }
      if(computerChoice === playerChoice){
        computerwon++;
        playerwon++;
      }else{
        if(rules[computerChoice] === playerChoice) {
         computerwon++;
        } 
         playerwon++;    
      }

}
function game(n){ 
  for(let i = 0; i < n; i++ ){
    let computerChoice = getComputerChoice();
    let playerChoice = prompt('enter your choice:');
    singleround(computerChoice,playerChoice);
    
  }
}
game(1)
if(playerwon === computerwon){
      alert('its a draw');
}else{
      (playerwon > computerwon) ? alert(`you score is ${playerwon},you won`) : alert(`your score is ${playerwon},you lose`);
}