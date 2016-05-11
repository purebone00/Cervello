//canvas name
var canvas;

var mainMenu = function() {
	canvas = document.getElementById('myCanvas').getContext('2d');
	myCanvas.style.border = "inset";
};

$(document).ready(function(){
    $("#playButton").click(function(){
        $("#playButton").fadeOut();
        $("#optionButton").fadeOut()
    });
    $("#optionButton").click(function(){
        $("#playButton").fadeOut();
        $("#optionButton").fadeOut()
    });
});


