

// what does game do?
    // 1) squares light up in a random pattern starting with just one light during the lightup sequence
    // 2) user clicks, if sequence is clicked in the correct order, score is incremented by one
    // 3) increment light sequence by one
    // 4) if lightup sequence is clicked in the incorrect order, user loses and gains no points.
    
// press start button to start
// show new sequence
// user choose
    // correct? if yes, is it the end of the sequence? if yes, add one to sequence if no, use choose. if no, game over 
                
    // target squares
    const greenSquare = document.querySelector('.green');
    const yellowSquare = document.querySelector('.yellow');
    const redSquare = document.querySelector('red');
    const blueSquare = document.querySelector('blue'); 

    greenSquare.addEventListener('click', test)
    function test(test){
        console.dir(test)
    }