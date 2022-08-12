const rules = {
  'rock': 'scissors',
  'scissors': 'paper',
  'paper': 'rock'
}

let choices = document.querySelectorAll('.choice');
let text = document.querySelector('.text');
let plyerchoice;
let score1 = 0;
let score2 = 0;

function getComputerChoice() {
  const compchoice = ['rock', 'paper', 'scissors'];
  return (compchoice[Math.floor(Math.random() * 3)])
}

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    plyerchoice = choice.getAttribute('id');
    singleround(getComputerChoice(), plyerchoice)
  })
})

function singleround(computerChoice, playerChoice) {
  if (score1 === 5 || score2 === 5) {
    refreshpage();
  } else if (computerChoice === playerChoice) {
    text.textContent = `it's a tie : ${playerChoice} | ${computerChoice}`;
  } else {
    if (rules[computerChoice] === playerChoice) {
      text.textContent = `You won : ${playerChoice} | ${computerChoice}`;
      score1++;
      document.getElementById('playerscore').innerText = score1;
      if (score1 === 5) {
        text.textContent = 'YOU WON!'
        refreshpage()
      }
    } else {
      text.textContent = `Computer won : ${playerChoice} | ${computerChoice}`;
      score2++;
      document.getElementById('computerscore').innerText = score2;
      if (score2 === 5) {
        text.textContent = 'YOU LOST!'
        refreshpage()
      }
    }
  }
}

let btn = document.createElement('button');
let refresh = document.getElementById('refresh')

function refreshpage() {
  btn.setAttribute('id', 'refreshbtn')
  refresh.appendChild(btn)
  document.getElementById('refreshbtn').innerText = 'PLAY AGAIN';
  btn.addEventListener('click', () => {
    window.location.reload(true)
  })
}


