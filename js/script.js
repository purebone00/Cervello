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


$(document).keydown(function(e) {
    //press up arrow key
    if (e.keyCode == '38') {
        alert('creators \n Albert \"PureBone00\" Chen \n Kevin \"Zireael\" Fong \n Jeff \"HitAndQuit007\" Nguyen \n Nitori \"Pomelo\" Nyamekye \n Matt \"peg631\" Lin ');
        }
});
