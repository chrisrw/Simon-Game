// As a user, 1) I should be able to start the game play clicking "start"
//2) As colors light up, I should be able to click them in the order that they lit up.
//3) If I click the sequence in the correct order, I should gain a point and the difficulty should increase by increasing the sequence length by 1.
//4) If I click the sequence incorrectly, I should be notified that the game is over and I need to start over from a sequence length of 1.

// what does game do?
// 1) squares light up in a random pattern starting with just one light during the lightup sequence
// 2) user clicks, if sequence is clicked in the correct order, score is incremented by one
// 3) increment light sequence by one
// 4) if lightup sequence is clicked in the incorrect order, user loses and gains no points.

// how should the process look to the user?
// press start button to start
// show new sequence
// user needs to choose
// user choice:  Is not correct - game over, start over
//is correct - is it the end of the sequence?
//if no, user keeps choosing until end of sequence is reached
//if yes, raise difficulty by adding one more color to the sequence

// target squares
const greenSquare = document.querySelector(".green");
const yellowSquare = document.querySelector(".yellow");
const redSquare = document.querySelector(".red");
const blueSquare = document.querySelector(".blue");
const scoreCount = document.querySelector(".scoreCount");
const start = document.querySelector(".start");
// keep order of the lights
let userInput = [];
let simonArray = [];

//event listeners that push whatever is clicked into the userInput array
greenSquare.addEventListener("click", greenPush);
yellowSquare.addEventListener("click", yellowPush);
redSquare.addEventListener("click", redPush);
blueSquare.addEventListener("click", bluePush);
//functions that push whatever is clicked into the userInput array
function greenPush() {
  userInput.push(1);
  console.log(userInput);
}
function yellowPush() {
  userInput.push(2);
  console.log(userInput);
}
function redPush() {
  userInput.push(3);
  console.log(userInput);
}
function bluePush() {
  userInput.push(4);
  console.log(userInput);
}
//turns off box shadows
const turnOffShadow = function() {
  greenSquare.style.boxShadow = "none";
  yellowSquare.style.boxShadow = "none";
  redSquare.style.boxShadow = "none";
  blueSquare.style.boxShadow = "none";
};

//light up boxes
function litGreen() {
  greenSquare.style.boxShadow = "0px 0px 83px 3px rgba(0,0,0,1)";
  setTimeout(turnOffShadow, 300);
}
function litYellow() {
  yellowSquare.style.boxShadow = "0px 0px 83px 3px rgba(0,0,0,1)";
  setTimeout(turnOffShadow, 300);
}
function litRed() {
  redSquare.style.boxShadow = "0px 0px 83px 3px rgba(255,0,0,1)";
  setTimeout(turnOffShadow, 300);
}
function litBlue() {
  blueSquare.style.boxShadow = "0px 0px 83px 3px rgba(255,0,0,1)";
  setTimeout(turnOffShadow, 300);
}
