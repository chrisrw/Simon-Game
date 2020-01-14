// Hou's comment: I'd move lines 2-14 to the readme.
// As a user, 1) I should be able to start the game play clicking "start"
//2) As colors light up, I should be able to click them in the order that they lit up.
//3) If I click the sequence in the correct order, I should gain a point and the difficulty should increase by increasing the sequence length by 1.
//4) If I click the sequence incorrectly, I should be notified that the game is over and I need to start over from a sequence length of 1.

// how should the process look to the user?
// press start button to start
// show new sequence
// user needs to choose
// user choice:  Is not correct - game over, start over
//is correct - is it the end of the sequence?
//if no, user keeps choosing until end of sequence is reached
//if yes, raise difficulty by adding one more color to the sequence

// target squares, start button, and score
const greenSquare = document.querySelector('.green');
const yellowSquare = document.querySelector('.yellow');
const orangeSquare = document.querySelector('.orange');
const purpleSquare = document.querySelector('.purple');
const scoreCount = document.querySelector('.scoreCount');
const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');
const audio = document.querySelector('#myAudio');
let score = (scoreCount.textContent = 0);
//score increment
function scoreIncrement() {
  scoreCount.textContent++;
}
function scoreZero() {
  scoreCount.textContent = 0;
}
// user input and simon arrays
let userInput = [];
let simonArray = [];

//event listeners that push whatever is clicked into the userInput array
start.addEventListener('click', startGame);

// how would you use event propagation to refactor lines 41-44?
greenSquare.addEventListener('click', () => push(1));
yellowSquare.addEventListener('click', () => push(2));
orangeSquare.addEventListener('click', () => push(3));
purpleSquare.addEventListener('click', () => push(4));
//functions that push whatever is clicked into the userInput array and checks if the userInput's indexed item matches Simon's indexed item.
function checkIndex() {
  if (userInput[userInput.length - 1] !== simonArray[userInput.length - 1]) {
    simonArray = [];
    gameOver.style.display = 'grid';
    scoreZero();
  }
}

function push(num) {
  userInput.push(num);
  checkIndex();
  checkIfDone();
}

//turns off box shadows
const turnOffShadow = function() {
  const squares = [greenSquare, yellowSquare, orangeSquare, purpleSquare];
  squares.forEach(square => {
    square.style.boxShadow = 'none';
  });
};

//light up boxes
function lightBox(boxNumber) {
  let box;
  if (boxNumber === 1) box = greenSquare;

  if (boxNumber === 2) box = yellowSquare;

  if (boxNumber === 3) box = orangeSquare;

  if (boxNumber === 4) box = purpleSquare;

  if (box) {
    box.style.boxShadow = '0px 0px 83px 20px rgba(249,54,54,1)';
    audio.play();
    setTimeout(turnOffShadow, 300);
  }
}

//add random number between 1-4 and push to simon array
function randomGen() {
  const results = simonArray.push(Math.floor(Math.random() * 4) + 1);
}

function turn() {
  //add one to simonArray
  randomGen();
  //light up simonArray sequence for user
  for (let i = 0; i < simonArray.length; i++) {
    setTimeout(function() {
      lightBox(simonArray[i]);
    }, 1000 * i);
  }
}

//check if userInput and simonArray lengths match
function checkIfDone() {
  if (userInput.length === simonArray.length) {
    userInput = [];
    scoreIncrement();
    turn();
  } else return;
}
//start button starts the game
function startGame() {
  userInput = [];
  simonArray = [];
  scoreZero();
  turn();
  gameOverScreen();
}

function gameOverScreen() {
  if (gameOver.style.display === 'none') {
    gameOver.style.display = 'grid';
  } else {
    gameOver.style.display = 'none';
  }
}
