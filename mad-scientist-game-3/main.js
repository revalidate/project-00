console.log("Sanity Check: JS is working!");

var player1LeftRight = 0;
var player1UpDown = 0;
var player2LeftRight = 0;
var player2UpDown = 400;

$(document).ready(function() {
	
	// Makes sure game starts after Reset
	function startGame() {
		
		//Players 1 responds to W,A,S,D & Player 2 responds to Up/Down/Left/Right arrow keys
		$(document).keydown(function (e) {
			var guy1Left = $("#player1").position().left;
			var guy1Top = $("#player1").position().top;
			var guy2Left = $("#player2").position().left;
			var guy2Top = $("#player2").position().top;
	        if (e.keyCode ===68) {
	 			player1LeftRight += 20;
	 			$("#player1").css({left:player1LeftRight});
	 		} else if (e.keyCode ===65) {
	 			player1LeftRight -= 20;
	 			$("#player1").css({left:player1LeftRight});
	 		} else if (e.keyCode ===83) {
	 			player1UpDown += 20;
	 			$("#player1").css({top:player1UpDown});
	 		} else if (e.keyCode ===87) {
	 			player1UpDown -= 20;
	 			$("#player1").css({top:player1UpDown});
	 		} else if (e.keyCode === 39) {
	        	player2LeftRight += 20;
	        	$("#player2").css({left:player2LeftRight});
	        } else if (e.keyCode === 37) {
	        	player2LeftRight -= 20;
	        	$("#player2").css({left:player2LeftRight});
	        } else if (e.keyCode === 40) {
	        	player2UpDown += 20;
	        	$("#player2").css({top:player2UpDown});
	        } else if (e.keyCode === 38) {
	        	player2UpDown -= 20;
	        	$("#player2").css({top:player2UpDown});
	        }
	 		checkWinner();
		});
	}

//Reset Button
	$("button").click(function reset() {
		$("#player1").css('left', 0);
		$("#player1").css('top', 0);
		$("#player2").css('left', 0);
		$("#player2").css('top', 400);
		player1LeftRight = 0;
		player1UpDown = 0;
		player2LeftRight = 0;
		player2UpDown = 400;
		$("#winnerName").html("Ready, Set, Go!");
		$("#winnerConditions").html("Who can get inside the box first?");
		startGame();
	});

	startGame();
});

//Checks Winner
function checkWinner() {
	if ($('#player1').css('left')== "1000px" && $('#player1').css('top')=="200px") {
    	$("#winnerConditions").html("WINNER: ");
    	$("#winnerName").html("Lakshmi");

    	//Once one player wins, other player cannot move until board reset
    	$(document).off("keydown");
	} else if ($('#player2').css('left')== "1000px" && $('#player2').css('top')=="200px") {
     	$("#winnerConditions").html("WINNER: ");
     	$("#winnerName").html("Ganesha");
     	$(document).off("keydown");
	}
}