console.log("Sanity Check: JS is working!");

var playerRight = 0;
var playerLeft = 0;

$(document).ready(function() {
	$(document).keydown(function (e) {
        if(e.keyCode == 39) {
 			playerRight += 5;
        } else if (e.keyCode==37) {
        	playerLeft +=5;
        }
	});
});