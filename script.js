'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
const reLoadBtn = document.querySelector('.again');
let score = 20;
let highScore = 0;

const reloadFunction = () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

 displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};
reLoadBtn.addEventListener('click', reloadFunction);

const checkBtn = document.querySelector('.check');

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guessInput = Number(document.querySelector('.guess').value);
  // console.log(typeof guessInput);
  // როცა არ არის ინფუთში მონაცემი
  if (!guessInput) {
    displayMessage('😒There is no guess number in the input field');
    // როცა მოთამაშე იგებს
  } else if (guessInput == secretNumber) {
    // აქ უნდა შეიცვალოს ბექგრაუნდი
    document.querySelector('.message').textContent = '🥇Bingooo';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number');
    document.querySelector('.number').style.width = '30rem';
    //// highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // როცა ინფუთში ჩაწერილი რიცხვი მეტია ვიდრე გამოსაცნობი რიცხვი
  } else if (guessInput !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessInput > secretNumber ? '☝️Number is so HIGH' : '👇Number is so LOW'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 💣You LOST!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Deleted Part ^_~

// else if (guessInput > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '☝️Number is so HIGH';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = ' 💣You LOST!';
//     document.querySelector('.score').textContent = 0;
//   }
//   // როცა ინფუთში ჩაწერილი რიცხვი ნაკლები  გამოსაცნობ რიცხვზე
// } else if (guessInput < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '👇Number is so LOW';
//     document.querySelector('.score').textContent = score;
//     score--;
//   } else {
//     document.querySelector('.message').textContent = ' 💣You LOST!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
