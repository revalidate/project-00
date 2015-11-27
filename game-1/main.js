console.log("Sanity Check: JS is working!");

var playerOneLeft = 0;
var playerOneRight = 0;
var playerOneUp = 0;
var playerOneDown = 0;
var playerTwoLeft = 0;
var playerTwoRight = 0;
var playerTwoUp = 0;
var playerTwpDown = 0;

$(document).ready(function() {
	$(document).keydown(function (e) {
        if(e.keyCode == 88) {
 			playerOneLeft += 5;
 			$("#player1").css({left:playerOneLeft});
 		} else if (e.keyCode ==90) {
 			playerOneRight -= 5;
 			$("#player1").css({left:playerOneRight});
 		} else if (e.keyCode == 39) {
        	playerTwoLeft += 5;
        	$("#player2").css({left:playerTwoLeft});
        } else if (e.keyCode == 37) {
        	playerTwoRight -= 5;
        	$("#player2").css({left:playerTwoRight});
        }
	});
});