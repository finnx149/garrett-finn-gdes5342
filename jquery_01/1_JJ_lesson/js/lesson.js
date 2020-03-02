$(document).ready(function() {

	// animate
	$(".green").delay(1000).fadeOut("slow").delay(500).fadeIn("fast").fadeOut("slow");
	
	//red square fading
	$(".red").fadeIn("slow");
	
	// equivaent to css hover
	$(".red").mouseenter(function() {
		$(".red").fadeTo("fast", 0.5);
	});

	$(".red").mouseleave(function() {
		$(".red").fadeTo("fast", 1);
	});

	// change on click
	$(".red").click(function() {
		$(this).html("YEAH!");
	});

	// toggling CSS styles on and off
	$("p").click(function() {
		$(this).toggleClass("switch");
	});

	// adding and removing CSS styles to Red Square
	$(".red").click(function() {
		$("p").addClass("new");
	});
	
	$(".red").dblclick(function() {
		$("p").removeClass("new");
	});
	
	
	// give blue square animation and interaction
	$(".blue").animate( {
		width: "200px", 
		height: "200px"
	}, 2000);
	
	$(".blue").click(function() {
		$(".blue").animate( {
			left: "+=200px"
		}, 500);
	});

});