var resize = null;

var cWidth = document.documentElement.clientWidth;


window.onresize = function(){
    if(resize != null){
        clearTimeout();
    }
    resize = setTimeout(function(){
        // Detect and react to the screen size here
        cWidth = document.documentElement.clientWidth;

        document.getElementById('container').width = cWidth;
        document.getElementById('container').height = (cWidth * (2/3));




        }, 750); // Or some other reasonable delay
};
