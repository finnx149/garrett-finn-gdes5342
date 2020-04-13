$(document).ready(function() {

	// functions----------------------------------------------------------
	function randomPos() {
		// get dimensions of window (accounting for a margin)
		var h = $(window).height() - 200;
		var w = $(window).width() - 200;
		
		// select random coords based on dimensions
		var nh = Math.floor(Math.random() * h);
		var nw = Math.floor(Math.random() * w);
		
		return [nh, nw];
	}
	
	function animateStars(el) {
		// generate new position
		var newPos = randomPos();
		// apply the new position via animate
		$(el).animate( {
			top: newPos[0],
			left: newPos[1],
		}, 1000);
	}
	
	// animate button on hover -------------------------------------------
	$(".button").mouseenter(function() {
		$(".button").animate( {
			width: "150px", 
			height: "150px"
		}, 50);
	});
	
	$(".button").mouseleave(function() {
		$(".button").animate( {
			width: "100px", 
			height: "100px"
		}, 50);
	});
	
	// change on click ---------------------------------------------------
	$(".button").click(function() {
		// add new class to objects
		$(".button").addClass("buttonChanged");
		$(".star").addClass("starChanged");
		// animate stars
		$(".star").each(function() {
			animateStars(this);
		});
	});
});