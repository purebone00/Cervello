window.onload = function() {
    var c = document.getElemetByID("view");
    var ctx = c.getContext("2d");
    var img = document.getElementByID("title");
    ctx.drawImage(img,10,10);
}

$(document).ready(function(){
    $("#playButton").click(function(){
        $("#playButton").fadeOut();
        $("#optionButton").fadeOut();
        $("#title").fadeOut();
        $("#hud").fadeIn();
        $("#clock").fadeIn();
        startTimer(10);  // 10 seconds
    });
    $("#optionButton").click(function(){
        $("#playButton").fadeOut();
        $("#optionButton").fadeOut();
        $("#options").fadeIn();
    });
    $("#backButton").click(function(){
        $("#options").fadeOut();
        $("#playButton").fadeIn();
        $("#optionButton").fadeIn();
    });
    $("#sfxButton").click(function(){
        //SFX toggle function here
    });
    $("#bgmButton").click(function(){
      if (bgm.paused) {
        bgm.play();
      } else {
        bgm.pause();
      }
    });
});

$(document).keydown(function(e) {
    //press up arrow key
    if (e.keyCode == '38') {
        alert('creators \n Albert \"Purebone00\" Chen \n Kevin \"Zireael\" Fong \n Jeff \"HitAndQuit007\" Nguyen \n Ntori \"Pomelo\" Nyamekye \n Matt \"peg631\" Lin ');
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



var bgm  = new Audio('bkmusic.mp3');
bgm.loop = true;
bgm.play();
