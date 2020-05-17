$(document).ready(function() {
	
	// vars
	// -------------------------------------------------------------
	var aBlack = "#040c06";
	var aDarkLow = "#112318";
	var aDarkHigh = "#1e3a29";
	var aMidLow = "#305d42";
	var aMidHigh = "#4d8061";
	var aBrightLow = "#89a257";
	var aBrightHigh = "#bedc7f";
	var aWhite = "#eeffcc";
	
	
	// functions
	// -------------------------------------------------------------

	

	// animate POIs on hover start
	// show POI label
	$(".poi-1").hover(function() {
		var label = $(".label-1");
		
		label.removeClass("hidden");
		label.addClass("show");
		label.addClass("label-show");
	});
	
	$(".poi-2").hover(function() {
		var label = $(".label-2");
		
		label.removeClass("hidden");
		label.addClass("show");
		label.addClass("label-show");
	});
	
	$(".uzion-zoom-1").hover(function() {
		var label = $(".label-uzion");
		
		label.removeClass("hidden");
		label.addClass("show");
		label.addClass("label-uzion-show");
	});
	
	$(".ilias-zoom-1").hover(function() {
		var label = $(".label-ilias");
		
		label.removeClass("hidden");
		label.addClass("show");
		label.addClass("label-ilias-show");
	});
	
	
	// reset POIs on hover stop
	// hide POI label
	$(".poi-1").mouseleave(function() {
		$(".label-1").removeClass("show");
		$(".label-1").removeClass("label-show");
		$(".label-1").addClass("hidden");
	});
	
	$(".poi-2").mouseleave(function() {
		$(".label-2").removeClass("show");
		$(".label-2").removeClass("label-show");
		$(".label-2").addClass("hidden");
	});

});