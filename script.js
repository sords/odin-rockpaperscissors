const rules = {
  'rock': 'scissors',
  'scissors': 'paper',
  'paper': 'rock'
}

function getComputerChoice() {
  const compchoice = ['rock', 'paper', 'scissors'];
  return (compchoice[Math.floor(Math.random() * 3)])
}

let button = document.querySelectorAll('button');
let plyerchoice;
let text = document.querySelector('.text');
//let playerscore = document.querySelector('.payerscore');
//let computerscore = document.querySelector('.computerscore')
let score1 = 0;
let score2 = 0;

button.forEach(element => {
  element.addEventListener('click', () => {
    plyerchoice = element.getAttribute('id');
    singleround(getComputerChoice(),plyerchoice)
  })
})

function singleround(computerChoice, playerChoice) {
  console.log(computerChoice,playerChoice)

  if (computerChoice === playerChoice) {
      text.textContent = "it's a tie my dear";
  } else {
    if (rules[computerChoice] === playerChoice) {
      text.textContent = "it's time to take control the world";
      score1++;
      document.getElementById('playerscore').innerText = score1;

    } else {
      text.textContent = 'i think human owns this';
      console.log(computerscore.value);
      score2++;
      document.getElementById('computerscore').innerText = score2;
    }
  }
}


