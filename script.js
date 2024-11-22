'use strict';

// const message = document.querySelector('.message').textContent = "👌Correct Number"

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 1121;
// console.log(document.querySelector('.guess').value)
const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

console.log(secretNumber);

const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', function () {
  const guessInput = Number(document.querySelector('.guess').value);
  // console.log(typeof guessInput);

  if (!guessInput) {
    document.querySelector('.message').textContent =
      '😒There is no guess number in the input field';
  } else if (guessInput == secretNumber) {
    document.querySelector('.message').textContent = '🥇Bingooo';
    score;
    document.querySelector('.score').textContent = score;
  } else if (guessInput > secretNumber) {
    document.querySelector('.message').textContent = '☝️Number is so HIGH';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessInput < secretNumber) {
    document.querySelector('.message').textContent = '👇Number is so LOW';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = ' 😊Incorrect number!';
  }
});
