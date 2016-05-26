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

/**
* Score variable.
*/
var score = 0;

/**
* Displays gameover screen.
*/
function gameOver(){
    $("#gameOver").fadeIn();
    var gameOverScore = score;
    document.getElementById("formScore").value = gameOverScore;
    document.getElementById("gameOverScore").innerText = "Score: " + gameOverScore;

    score = 0;
    document.getElementById("score").innerText = "Score: " + score;
}

/**
* Resets the game UI.
*/
function resetGame() {
  	alert('hello');
		getnewTarget();
		score = 0;
		$("#heartOne").attr("src", "images/graphic/heart_active.png");
        $("#heartTwo").attr("src", "images/graphic/heart_active.png");
        $("#heartThree").attr("src", "images/graphic/heart_active.png");
		clearInterval(ticker);
		startTimer(10);

		for (var i = 5; i < balls.length; i++) {
			if(balls[i] != null) {
				balls[i] = null;
			}
		}
		curBalls = 5;
		counter = 1;
		variableMaxVelocity = 5;
		document.getElementById("score").innerText = "score: " + score;
}

/**
* Our entire menu system.
*/
$(document).ready(function(){
    $("#playButton").click(function(){
        $("#playButton").fadeOut();
        $("#optionButton").fadeOut();
        $("#leaderBoardButton").fadeOut();
        $("#tutorialButton").fadeOut();
        $("#title").fadeOut();
        $("#main").fadeOut();
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
        $("#main").fadeOut();
        $("#options").fadeIn();
    });
    $("#backButton").click(function(){
        $("#options").fadeOut();
        $("#playButton").fadeIn();
        $("#title").fadeIn();
        $("#optionButton").fadeIn();
        $("#leaderBoardButton").fadeIn();
        $("#tutorialButton").fadeIn();
        $("#main").fadeIn();
    });
    $("#sfxButton").bind("click", function(){
        //SFX toggle function here
	  if(sfx.paused) {
		sfx.pause();
	  } else {
		sfx.play();
    }
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

        score = 0;
        document.getElementById("score").innerText = "Score: " + score.toFixed(0);
    });
    $("#pause_retryButton").click(function(){
		resetGame();

    })


    $("#go_exitButton").click(function(){
        $("#heartOne").attr("src", "images/graphic/heart_active.png");
        $("#heartTwo").attr("src", "images/graphic/heart_active.png");
        $("#heartThree").attr("src", "images/graphic/heart_active.png");
        $("#hud").fadeOut();
        $("#clock").fadeOut();
        $("#timerUI").fadeOut();
        $("#playButton").fadeIn();
        $("#optionButton").fadeIn();
        $("#leaderBoardButton").fadeIn();
        $("#tutorialButton").fadeIn();
        $("#title").fadeIn();
        $("#leaderBoardButton").fadeIn();
        $("#tutorialButton").fadeIn();
        $("#main").fadeIn();
        $("#hud").fadeOut();
        $("#clock").fadeOut();
        $("#timerUI").fadeOut();
        $("#gameOver").fadeOut();
        lives = 3;
        isPlaying = false;
        if(isPaused){
            isPaused = false;
        }
        clearInterval(ticker);
        score = 0;
        document.getElementById("score").innerText = "Score: " + score;
		location.reload();
    });


    $("#go_retryButton").click(function(){
		location.reload();

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
