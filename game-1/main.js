console.log("Sanity Check: JS is working!");

var playerOneLeft = 0;
var playerOneRight = 0;
var playerOneUp = 0;
var playerOneDown = 0;
var playerTwoLeft = 0;
var playerTwoRight = 0;
var playerTwoUp = 0;
var playerTwoDown = 0;

$(document).ready(function() {
	$(document).keydown(function (e) {
		var guy1Left = $("#player1").position().left;
		var guy1Top = $("#player1").position().top;
		var guy2Left = $("#player2").position().left;
		var guy2Top = $("#player2").position().top;
        if (e.keyCode ===83) {
 			playerOneLeft += 5;
 			$("#player1").css({left:playerOneLeft});
 		} else if (e.keyCode ===65) {
 			playerOneRight -= 5;
 			$("#player1").css({left:playerOneRight});
 		} else if (e.keyCode ===90) {
 			playerOneUp += 5;
 			$("#player1").css({top:playerOneUp});
 		} else if (e.keyCode ===87) {
 			playerOneDown -= 5;
 			$("#player1").css({top:playerOneDown});
 		} else if (e.keyCode === 39) {
        	playerTwoLeft += 5;
        	$("#player2").css({left:playerTwoLeft});
        } else if (e.keyCode === 37) {
        	playerTwoRight -= 5;
        	$("#player2").css({left:playerTwoRight});
        } else if (e.keyCode === 40) {
        	playerTwoUp += 5;
        	$("#player2").css({top:playerTwoUp});
        } else if (e.keyCode === 38) {
        	playerTwoDown -= 5;
        	$("#player2").css({top:playerTwoDown});
        }
 		checkWinner();
	});
	$("button").click(function reset() {
		$("#player1").css('left', 0);
		$("#player1").css('top', 0);
		$("#player2").css('left', 0);
		$("#player2").css('top', 400);
	});
});

function checkWinner() {
	if ($('#player1').css('left')== "500px" && $('#player1').css('top')=="200px") {
    	alert("Lakshmi wins");
	} else if ($('#player2').css('left')== "500px" && $('#player2').css('top')=="200px") {
    	alert("Ganesha wins");
	}
}