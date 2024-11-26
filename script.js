'use strict';

// const message = document.querySelector('.message').textContent = "👌Correct Number"

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 1121;
// console.log(document.querySelector('.guess').value)
//////////////////////////////////////
let secretNumber = Math.floor(Math.random() * 20) + 1;
const reLoadBtn = document.querySelector('.again');
let score = 20;
let highScore =  0;

const reloadFunction = () => {
  // window.location.reload();
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};
reLoadBtn.addEventListener('click', reloadFunction);

// console.log(secretNumber);

const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', function () {
  const guessInput = Number(document.querySelector('.guess').value);
  // console.log(typeof guessInput);
  // როცა არ არის ინფუთში მონაცემი
  if (!guessInput) {
    document.querySelector('.message').textContent =
      '😒There is no guess number in the input field';
    // როცა მოთამაშე იგებს
  } else if (guessInput == secretNumber) {
    // აქ უნდა შეიცვალოს ბექგრაუნდი
    document.querySelector('.message').textContent = '🥇Bingooo';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number');
    document.querySelector('.number').style.width = '30rem';
    //// highScore
    if(score > highScore ){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // score;
    // document.querySelector('.score').textContent = score;
    // როცა ინფუთში ჩაწერილი რიცხვი მეტია ვიდრე გამოსაცნობი რიცხვი
  } else if (guessInput > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '☝️Number is so HIGH';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 💣You LOST!';
      document.querySelector('.score').textContent = 0;
    }
    // როცა ინფუთში ჩაწერილი რიცხვი ნაკლები  გამოსაცნობ რიცხვზე
  } else if (guessInput < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇Number is so LOW';
      document.querySelector('.score').textContent = score;
      score--;
    } else {
      document.querySelector('.message').textContent = ' 💣You LOST!';
      document.querySelector('.score').textContent = 0;
    }
  }
});




