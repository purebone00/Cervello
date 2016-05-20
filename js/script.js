window.onload = function() {
    var c = document.getElemetByID("view");
    var ctx = c.getContext("2d");
    var img = document.getElementByID("title");
    ctx.drawImage(img,10,10);
}

var isPlaying = false;
var isPaused = false;
var score = 0;

$(document).ready(function(){
    $("#playButton").click(function(){
        $("#playButton").fadeOut();
        $("#optionButton").fadeOut();
        $("#leaderBoardButton").fadeOut();
        $("#tutorialButton").fadeOut();
        $("#title").fadeOut();
        $("#hud").fadeIn();
        $("#clock").fadeIn();
        $("#timerUI").fadeIn();
        isPlaying = true;
        startTimer(10);  // 10 seconds
    });
    $("#optionButton").click(function(){
        $("#playButton").fadeOut();
        $("#title").fadeOut();
        $("#optionButton").fadeOut();
        $("#leaderBoardButton").fadeOut();
        $("#tutorialButton").fadeOut();
        $("#options").fadeIn();
    });
    $("#backButton").click(function(){
        $("#options").fadeOut();
        $("#playButton").fadeIn();
        $("#title").fadeIn();
        $("#optionButton").fadeIn();
        $("#leaderBoardButton").fadeIn();
        $("#tutorialButton").fadeIn();
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
        if(!isPaused){
            isPaused = true;
        }
        isPlaying = false;
        $("#pause").fadeIn();
    });
    $("#pause_playButton").click(function(){
        $("#pause").fadeOut();
        if(isPaused){
            isPaused = false;
        }
        isPlaying = true;
    });
    $("#pause_exitButton").click(function(){
        $("#gameOver").fadeIn();
        $("#pause").fadeOut();
        score = 0;
        document.getElementById("score").innerText = "Score: " + score;
    });
    $("#pause_retryButton").click(function(){
        //retry function here
    })
        isPlaying = false;
        if(isPaused){
            isPaused = false;
        }
        clearInterval(ticker);
    $("#go_exitButton").click(function(){
        $("#hud").fadeOut();
        $("#clock").fadeOut();
        $("#timerUI").fadeOut();
        $("#playButton").fadeIn();
        $("#optionButton").fadeIn();
        $("#title").fadeIn();
        $("#leaderBoardButton").fadeIn();
        $("#tutorialButton").fadeIn();
        $("#hud").fadeOut();
        $("#clock").fadeOut();
        $("#timerUI").fadeOut();
        $("#gameOver").fadeOut();
        isPlaying = false;
        if(isPaused){
            isPaused = false;
        }
        clearInterval(ticker);
        score = 0;
        document.getElementById("score").innerText = "Score: " + score;
    });
    $("#pause_retryButton").click(function(){
        //retry function here
    })
});

$(document).keydown(function(e) {
    //press up arrow key
    if (e.keyCode == '38') {
        alert('creators \n Albert \"Purebone00\" Chen \n Kevin \"Zireael\" Fong \n Jeff \"HitAndQuit007\" Nguyen \n Ntori \"Pomelo\" Nyamekye \n Matt \"peg631\" Lin ');
        }
});

var bgm  = new Audio('sound/bkmusic.mp3');
bgm.loop = true;
bgm.play();
