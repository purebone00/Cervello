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
        $("#timerUI").fadeIn();
        startTimer(10);  // 10 seconds
    });
    $("#optionButton").click(function(){
        $("#playButton").fadeOut();
        $("#title").fadeOut();
        $("#optionButton").fadeOut();
        $("#options").fadeIn();
    });
    $("#backButton").click(function(){
        $("#options").fadeOut();
        $("#playButton").fadeIn();
        $("#title").fadeIn();
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
    $("#pauseButton").click(function(){
        $("#pause").fadeIn();
    });
    $("#pause_playButton").click(function(){
        $("#pause").fadeOut();
    });
    $("#pause_exitButton").click(function(){
        $("#pause").fadeOut();
        $("#playButton").fadeIn();
        $("#optionButton").fadeIn();
        $("#title").fadeIn();
        $("#hud").fadeOut();
        $("#clock").fadeOut();
        $("#timerUI").fadeOut();
    });
});

$(document).keydown(function(e) {
    //press up arrow key
    if (e.keyCode == '38') {
        alert('creators \n Albert \"Purebone00\" Chen \n Kevin \"Zireael\" Fong \n Jeff \"HitAndQuit007\" Nguyen \n Ntori \"Pomelo\" Nyamekye \n Matt \"peg631\" Lin ');
        }
});

var bgm  = new Audio('bkmusic.mp3');
bgm.loop = true;
bgm.play();
