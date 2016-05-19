window.onload = function() {
    var ctx = c.getContext("2d");
    var img = document.getElementByID("title");
    ctx.drawImage(img,10,10);
    var bgm  = new Audio('sound/bkmusic.mp3');
    bgm.loop = true;
    bgm.play();
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
<<<<<<< HEAD
=======

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





var bgm  = new Audio('bkmusic.mp3');
bgm.loop = true;
bgm.play();
>>>>>>> 145925a5234c87146d7076335799c5fe4c150c9c
