/**
* Static initialize when the window is loaded.
*/
window.onload = function() {
    var c = document.getElementById("view");
    var ctx = c.getContext("2d");
    var img = document.getElementById("title");
    ctx.drawImage(img,10,10);
}

/**
* The first canvas avaliable.
*/
var canvas = $('canvas')[0];

/**
* Boolean on if the player is currently in game.
*/
var isPlaying = false;

/**
* Boolean on if the player is currently paused.
*/
var isPaused = false;

var sfxOnOff = true;

/**
* Score variable.
*/
var score = 0;

var gameOverSound = new Audio('sound/gameOver.mp3');
var coin = new Audio('sound/coin.wav');
var wrong = new Audio('sound/wrong.wav');



function playCoin() {
	if(sfxOnOff) {
		coin.play();
	}
}

function playWrong() {
	if(sfxOnOff) {
		wrong.play();
	}
}

function endSound() {
	if(sfxOnOff) {
		gameOverSound.play();
	}
}

function checkAchievements(){
    if(score >= 500){
        //make first achievement badge visible; 500
        $("#achieveOne").fadeIn();
    }

    if(score >= 5000){
        //make second chievement badge visible; 5000
        setTimeout(function() {
            $("#achieveTwo").fadeIn();
        }, 1500);
    }

    if(score >= 10000){
        //make third achievement badge visible; 10 000
        setTimeout(function() {
            $("#achieveThree").fadeIn();
        }, 3000);
    }
}

/**
* Displays gameover screen.
*/
function gameOver(){
    endSound();
    isPlaying = false;
    $("#gameOver").fadeIn();
    var gameOverScore = score;
    document.getElementById("formScore").value = gameOverScore;
    document.getElementById("gameOverScore").innerText = "Score: " + gameOverScore.toFixed(0);
    document.getElementById("score").innerText = "Score: " + score.toFixed(0);

    checkAchievements();
}

function resetGame() {
    lives = 3;
    $("#heartOne").attr("src", "images/graphic/heart_active.png");
    $("#heartTwo").attr("src", "images/graphic/heart_active.png");
    $("#heartThree").attr("src", "images/graphic/heart_active.png");

    $("#achieveOne").fadeOut();
    $("#achieveTwo").fadeOut();
    $("#achieveThree").fadeOut();

    score = 0;
    document.getElementById("score").innerText = "Score: " + score;

    clearInterval(ticker);
    startTimer(10);
}


/**
* Our entire menu system.
*/
$(document).ready(function(){

    $("#playButton").click(function(){
        $("#playButton").fadeOut();
        $("#optionButton").fadeOut();
        $("#leaderBoardButton").fadeOut();
        $("#title").fadeOut();
        $("#main").fadeOut();
        $("#hud").fadeIn();
        $("#clock").fadeIn();
        $("#timerUI").fadeIn();
        $("#score").fadeIn();
        isPlaying = true;
        startTimer(10);  // 10 seconds
    });

    $("#optionButton").click(function(){
        $("#playButton").fadeOut();
        $("#title").fadeOut();
        $("#optionButton").fadeOut();
        $("#leaderBoardButton").fadeOut();
        $("#main").fadeOut();
        $("#options").fadeIn();
    });

    $(".backButton").click(function(){
        $("#options").fadeOut();
        $("#playButton").fadeIn();
        $("#title").fadeIn();
        $("#optionButton").fadeIn();
        $("#leaderBoardButton").fadeIn();
        $("#main").fadeIn();
        $("#leaderboard").fadeOut();
    });

    $("#sfxButton").click(function(){
		    sfxOnOff = !sfxOnOff;
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
        var gameOverSubmit = score;
        document.getElementById("formScore").value = gameOverSubmit;
        document.getElementById("gameOverScore").innerText = "Score: " + gameOverSubmit.toFixed(0);

        checkAchievements();
    });

    $("#leaderBoardButton").click(function(){
      $.ajax({
        type: "POST",
        url: "leaderboard.php",
        dataType:"json",
        success: function(response) {
          $("#leaderboardTable").empty();

          $('<tr>').append(
            $('<th>').text("ID"),
            $('<th>').text("Name"),
            $('<th>').text("Score")
          ).appendTo('#leaderboardTable');

          $.each(response, function(i, item) {
            $('<tr>').append(
              $('<td>').text(item.id),
              $('<td>').text(item.name),
              $('<td>').text(item.score)
            ).appendTo('#leaderboardTable');
          });
        }
      });
      $("#leaderboard").fadeIn();
    })

    $("#scoreSubmitForm").submit(function(e) {
      $.ajax({
        type: "POST",
        url: "submitscore.php",
        data: $(this).serialize(), // serializes the form's elements.
        success: function(data) {
        }
      });
      e.preventDefault(); // avoid to execute the actual submit of the form.
    });
});

/**
* Background music.
*/
var bgm  = new Audio('sound/bkmusic.mp3');
bgm.loop = true;
bgm.play();

/**
* SFX for clicking the correct ball.
*/
var sfx = new Audio('sound/coin.wav');

function changeImage_BGM(element) {
    element.src = element.bln ? "images/button/bgm.png" : "images/button/bgm_mute.png";
    element.bln = !element.bln;
}

function changeImage_SFX(element) {
    element.src = element.bln ? "images/button/sfx.png" : "images/button/sfx_mute.png";
    element.bln = !element.bln;
}
