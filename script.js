const rules = {
  'rock': 'scissors',
  'scissors': 'paper',
  'paper': 'rock'
}

function getComputerChoice() {
  const compchoice = ['rock', 'paper', 'scissors'];
  return (compchoice[Math.floor(Math.random() * 3)])
}

let button = document.querySelectorAll('.button');
let plyerchoice;
let text = document.querySelector('.text');
//let playerscore = document.querySelector('.payerscore');
//let computerscore = document.querySelector('.computerscore')
let score1 = 0;
let score2 = 0;
let comentry = document.querySelector('.commentry');
button.forEach(element => {
  element.addEventListener('click', () => {
    plyerchoice = element.getAttribute('id');
    singleround(getComputerChoice(), plyerchoice)
  })
})
function refreshpage() {

  let refresh = document.getElementById('refresh');
  text.textContent = 'PLAY AGAIN';
  refresh.addEventListener('click', () => {
    window.location.reload(true)
  })
  let repress = document.getElementById('repress')
  let btn = document.createElement('button');
 btn.setAttribute('id','refresh1')
 repress.appendChild(btn)
 repress.getElementById('refresh1').innerText = 'PLAY AGAIN';

}

function singleround(computerChoice, playerChoice) {
  console.log(computerChoice, playerChoice)
  if (score1 === 5 || score2 === 5) {
    refreshpage();

  } else if (computerChoice === playerChoice) {
    text.textContent = "it's a tie my dear";
  } else {
    if (rules[computerChoice] === playerChoice) {
      text.textContent = "it's time to take control the world";
      score1++;
      document.getElementById('playerscore').innerText = score1;
      if (score1 === 5) {
        text.textContent = 'player have won'
        //refreshpage()
      }

    } else {
      text.textContent = 'i think human owns this';
      console.log(computerscore.value);
      score2++;
      document.getElementById('computerscore').innerText = score2;
      if (score2 === 5) {
        text.textContent = 'compu have won'
        //refreshpage()
      }
    }


  }
}


