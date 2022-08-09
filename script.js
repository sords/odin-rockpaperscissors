const rules = {
  'rock': 'scissors',
  'scissors': 'paper',
  'paper': 'rock'
}

function getComputerChoice() {
  const compchoice = ['rock', 'paper', 'scissors'];
  return (compchoice[Math.floor(Math.random() * 3)])
}


function singleround(computerChoice, playerChoice) {

  if (computerChoice === playerChoice) {
    computerwon++;
    playerwon++;
  } else {
    if (rules[computerChoice] === playerChoice) {
      computerwon++;
    }
    playerwon++;
  }
}



let button = document.querySelectorAll('button');

button.forEach(element => {
  element.addEventListener('click', () => {
    alert('hello world')
  })
});