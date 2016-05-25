var timeInSecs;
var ticker;
var lives = 3;

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
            break;
        case 1:
            $("#heartTwo").attr("src", "images/graphic/heart_disactive.png");
            break;
        case 0:
            $("#heartOne").attr("src", "images/graphic/heart_disactive.png");
            break;
    }

    if(lives <=0){
        gameOver();
    }
}

function startTimer(secs){
    timeInSecs = parseInt(secs)-1;
    ticker = setInterval("tick()",1000);   // every second
}

function tick() {
    var secs = timeInSecs;
    if (secs>0) {
        if(!isPaused) {
            timeInSecs--;
        }
    }
    else {
        deductLife();
            clearInterval(ticker); // stop counting at zero
        if(lives > 0) {
            startTimer(10);  // remove forward slashes in front of startTimer to repeat if required
        }
    }

    document.getElementById("clock").innerHTML = secs;
}


//startTimer(10);  // 10 seconds
