/**
* Current Time.
*/
var timeInSecs;

/**
* Ticker object
*/
var ticker;

/**
* Number of lives our player has.
*/
var lives = 3;

/**
* Function to deduct the life variable.
*/
function deductLife(){
    /**
     * decrement the lives variable, and fade out the hearts graphic;
     * if lives == 2, fade out heartThree
     * if lives == 1, fade out heartTwo
     * if lives == 0, fade out heartOne and execute gameOver()
     **/
    lives--;

    switch (lives){
        case 2:
            $("#heartThree").attr("src", "images/graphic/heart_disactive.png");
	    playWrong();
        break;
        case 1:
            $("#heartTwo").attr("src", "images/graphic/heart_disactive.png");
            playWrong();
	break;
        case 0:
            $("#heartOne").attr("src", "images/graphic/heart_disactive.png");
	    playWrong();
        break;
    }

    if(lives <=0){
        gameOver();
    }
}

/**
* Starts the timer.
*/
function startTimer(secs){
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 10);   // every second
}

/**
* Timer tick function.
*/
function tick() {
    var secs = timeInSecs;
    if (secs>0) {
        if(!isPaused) {
            timeInSecs = timeInSecs - .01;
        }
    } else {
        deductLife();

		
            clearInterval(ticker); // stop counting at zero
        if(lives > 0) {
            startTimer(10);  // remove forward slashes in front of startTimer to repeat if required
        }
    }

    document.getElementById("clock").innerHTML = secs.toFixed(2);;
}
