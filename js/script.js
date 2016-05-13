$(document).ready(function(){
    $("#playButton").click(function(){
        $("#playButton").fadeOut();
        $("#optionButton").fadeOut()
    });
    $("#optionButton").click(function(){
        $("#playButton").fadeOut();
        $("#optionButton").fadeOut();
        $("#options").show();
    });
    $("#backButton").click(function(){
        $("#options").hide();
        $("#playButton").fadeIn();
        $("#optionButton").fadeIn();
    });
    $("#sfxButton").click(function(){
        //SFX toggle function here
    });
    $("#bgmButton").click(function(){
        //BGM toggle function here
    });
});

$(document).keydown(function(e) {
    //press up arrow key
    if (e.keyCode == '38') {
        alert('creators \n Albert \"Purebone00\" Chen \n Kevin \"Zireael\" Fong \n Jeff \"HitAndQuit007\" Nguyen \n Nitori \"Pomelo\" Nyamekye \n Matt \"peg631\" Lin ');
        }
});

var timeInSecs;
var ticker;

function startTimer(secs){
    timeInSecs = parseInt(secs)-1;
    ticker = setInterval("tick()",1000);   // every second
}

function tick() {
    var secs = timeInSecs;
    if (secs>0) {
        timeInSecs--;
    }
    else {
        clearInterval(ticker); // stop counting at zero
        startTimer(10);  // remove forward slashes in front of startTimer to repeat if required
    }

    document.getElementById("clock").innerHTML = secs;
}

startTimer(10);  // 10 seconds



var audio  = new Audio('testMusic.mp3');
audio.play();