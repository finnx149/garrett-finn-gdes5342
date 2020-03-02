$(document).keydown(function(e) {
	
	switch(e.which) {
		// shift left
		case 37:
			$(".black").animate({left: "-=200px"}, 500);
			$(".black").html("left");
			$(".red").delay(160).animate( {left: "-=200px"}, 500);
		break;
		
		// shift up
		case 38:
			$(".black").animate({top: "-=200px"}, 500);
			$(".black").html("up");
			$(".red").delay(160).animate( {top: "-=200px"}, 500);
		break;
		
		// shift right
		case 39:
			$(".black").animate({left: "+=200px"}, 500);
			$(".black").html("right");
			$(".red").delay(160).animate( {left: "+=200px"}, 500);
		break;
		
		// shift down
		case 40:
			$(".black").animate({top: "+=200px"}, 500);
			$(".black").html("down");
			$(".red").delay(160).animate( {top: "+=200px"}, 500);
		break;
	}
	
	
});