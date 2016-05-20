var timeInSecs;
var ticker;

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
        clearInterval(ticker); // stop counting at zero
        startTimer(10);  // remove forward slashes in front of startTimer to repeat if required
    }

    document.getElementById("clock").innerHTML = secs;
}


//startTimer(10);  // 10 seconds
