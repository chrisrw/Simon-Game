# Simon-Game

How it works
This game was created using an array for the player, and array for simon, and clever implementation of the setTimeout method. Eventlisteners were added to each shape and a random number between 1-4 would be generated each round. This random number would be added to Simon's array and the numbers in Simon's array would correspond with a shape on the page. Functions were created so that the shapes would light up in accordance to Simon's current array. After which, the user would have to try and remember the correct sequence with which the shapes had lit up. When the user clicked on a shape, the shapes associated number would be pushed into the user's array. Each time a user clicked on a shape, functions would also be called to check and see if the user's array matched Simon's array. If the user's array did not match Simon's array, the user would get a "Game Over" message.

Objective: Simon will create a sequence of lights and the user is required to repeat the sequence. Each round that the user can accurately repeat simon's sequence, simon will add onto its sequence by one. Each time the user can accurately mimic simon's sequence, the user will add one point to the users score.

Instructions for users: To start the game, you will click on the "Start" button below the shapes. Doing this will start the game. Let simon's sequence play out and try to remember it in its exact order. After simon's sequence is done and the boxes have stopped lighting up, you must click the shapes in the order that Simon had previously lit up. If you click the shapes in an incorrect order, a "Game Over" message will be displayed at the top of the screen, and the game will be over.

Unsolved problem

One issue I was unable to contend with was creating a timeout function for each sequence where if the user did not input their sequence within a certain period of time, the user would lose and it would be game over. I tried using setTimeout along with clearTimeout, but it would not work as intended.
