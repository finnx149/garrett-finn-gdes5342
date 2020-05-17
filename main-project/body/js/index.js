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
	
	function whichTransitionEvent() {
		var t,
			el = document.createElement("fakeelement");
			
		var transitions = {
			"transitions"		: "transitionend",
			"OTransition"		: "oTransitionEnd",
			"MozTransition"		: "transitionend",
			"WebkitTransition"	: "webkitTransitionEnd"
		}
		
		for (t in transitions) {
			if (el.style[t] !== undefined) {
				return transitions[t];
			}
		}
	}
	
	var transitionEvent = whichTransitionEvent();
	
	function showHideLabelAndInfoBox(label, infoBox) {
		// hide all other POI labels
		$(".label").removeClass("show");
		$(".label").removeClass("label-show");
		$(".label").addClass("hidden");
		// hide all other POI info boxes
		$(".info-box-poi").removeClass("show");
		$(".info-box-poi").addClass("hidden");
		// show label for current POI
		label.removeClass("hidden");
		label.addClass("show");
		label.addClass("label-show");
		// show info box for current POI
		infoBox.removeClass("hidden");
		infoBox.addClass("show");
	}
	
	function showHideLabel(label) {
		// hide all other POI labels
		$(".label").removeClass("show");
		$(".label").removeClass("label-show");
		$(".label").addClass("hidden");
		// show label for current POI
		label.removeClass("hidden");
		label.addClass("show");
		label.addClass("label-show");
	}
	
	function switchToZoom1(el) {
		// dynamically switch zoom level based on passed element
		// hide all labels
		$(".label").removeClass("show");
		$(".label").removeClass("label-show");
		$(".label").addClass("hidden");
		
		// apply new zoom class to planet and transition other planets
		elClass = el.className;
		if (el.hasClass("planet-tarsus")) {
			el.removeClass("tarsus-zoom-0");
			el.addClass("tarsus-zoom-1-transition");
			$(".uzion-zoom-0").addClass("uzion-transition-hide");
			$(".ilias-zoom-0").addClass("ilias-transition-hide");
		}
		if (el.hasClass("planet-uzion")) {
			el.removeClass("uzion-zoom-0");
			el.addClass("uzion-zoom-1-transition");
			$(".tarsus-zoom-0").addClass("tarsus-transition-hide");
			$(".ilias-zoom-0").addClass("ilias-transition-hide");
		}
		if (el.hasClass("planet-ilias")) {
			el.removeClass("ilias-zoom-0");
			el.addClass("ilias-zoom-1-transition");
			$(".uzion-zoom-0").addClass("uzion-transition-hide");
			$(".tarsus-zoom-0").addClass("tarsus-transition-hide");
		}
				

		
		// change over after aimation is done
		el.one(transitionEvent,
			function(event) {
				// hide this planet and everything from zoom level 0
				el.addClass("hidden");
				$(".zoom-0").addClass("hidden");
				
				// hide labels
				$(".label").removeClass("show");
				$(".label").removeClass("label-show");
				$(".label").addClass("hidden");
				
				// hide elements besides the passed element
				if (!el.hasClass("planet-tarsus")) {
					$(".tarsus-zoom-0").removeClass("show");
					$(".tarsus-zoom-0").addClass("hidden");
				} else {
					// show zoom level 1 page
					$(".zoom-1").addClass("show");
					$(".info-box-tarsus").addClass("show");
					$(".tarsus-zoom-1").addClass("show");
				}
				if (!el.hasClass("planet-uzion")) {
					$(".uzion-zoom-0").removeClass("show");
					$(".uzion-zoom-0").addClass("hidden");
				} else {
					// show zoom level 1 page
					$(".zoom-1").addClass("show");
					$(".info-box-uzion").addClass("show");
					$(".uzion-zoom-1").addClass("show");
				}
				if (!el.hasClass("planet-ilias")) {
					$(".ilias-zoom-0").removeClass("show");
					$(".ilias-zoom-0").addClass("hidden");
				} else {
					// show zoom level 1 page
					$(".zoom-1").addClass("show");
					$(".info-box-ilias").addClass("show");
					$(".ilias-zoom-1").addClass("show");
				}
			}
		);
	}
	/*
		[ Zoom 0 ]
	*/
	
	// animate planet on hover start
	// show planet label
	$(".tarsus-zoom-0").hover(function() {
		var label = $(".label-tarsus");
		// hide all other POI labels
		showHideLabel(label);
	});
	
	$(".uzion-zoom-0").hover(function() {
		var label = $(".label-uzion");
		// hide all other POI labels
		showHideLabel(label);
	});
	
	$(".ilias-zoom-0").hover(function() {
		var label = $(".label-ilias");
		// hide all other POI labels
		showHideLabel(label);
	});
	
	// change on click 
	$(".tarsus-zoom-0").click(function() {
		// go to tarsus IV zoom 1 page
		el = $(".planet-tarsus");
		switchToZoom1(el);
	});
	
	$(".uzion-zoom-0").click(function() {
		// go to tarsus IV zoom 1 page
		el = $(".planet-uzion");
		switchToZoom1(el);
	});
	
	$(".ilias-zoom-0").click(function() {
		// go to tarsus IV zoom 1 page
		el = $(".planet-ilias");
		switchToZoom1(el);
	});
	
	/*
		[ Generic Zoom 1 ]
	*/
	// back button
	$(".back-button").click(function() {
		location.reload();
	});
	
	/*
		[ Tarsus Zoom 1 ]
	*/
	// animate POIs on hover start
	// show POI label
	$(".t-poi-1").hover(function() {
		var label = $(".t-label-1");
		var infoBox = $(".info-box-t-poi-1");
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".t-poi-2").hover(function() {
		var label = $(".t-label-2");
		var infoBox = $(".info-box-t-poi-2");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".t-poi-3").hover(function() {
		var label = $(".t-label-3");
		var infoBox = $(".info-box-t-poi-3");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".t-poi-4").hover(function() {
		var label = $(".t-label-4");
		var infoBox = $(".info-box-t-poi-4");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".t-poi-5").hover(function() {
		var label = $(".t-label-5");
		var infoBox = $(".info-box-t-poi-5");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".t-poi-6").hover(function() {
		var label = $(".t-label-6");
		var infoBox = $(".info-box-t-poi-6");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".t-poi-7").hover(function() {
		var label = $(".t-label-7");
		var infoBox = $(".info-box-t-poi-7");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".t-poi-8").hover(function() {
		var label = $(".t-label-8");
		var infoBox = $(".info-box-t-poi-8");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	/*
		[ Uzion Zoom 1 ]
	*/
	// animate POIs on hover start
	// show POI label
	$(".u-poi-1").hover(function() {
		var label = $(".u-label-1");
		var infoBox = $(".info-box-u-poi-1");
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".u-poi-2").hover(function() {
		var label = $(".u-label-2");
		var infoBox = $(".info-box-u-poi-2");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".u-poi-3").hover(function() {
		var label = $(".u-label-3");
		var infoBox = $(".info-box-u-poi-3");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".u-poi-4").hover(function() {
		var label = $(".u-label-4");
		var infoBox = $(".info-box-u-poi-4");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".u-poi-5").hover(function() {
		var label = $(".u-label-5");
		var infoBox = $(".info-box-u-poi-5");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".u-poi-6").hover(function() {
		var label = $(".u-label-6");
		var infoBox = $(".info-box-u-poi-6");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".u-poi-7").hover(function() {
		var label = $(".u-label-7");
		var infoBox = $(".info-box-u-poi-7");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".u-poi-8").hover(function() {
		var label = $(".u-label-8");
		var infoBox = $(".info-box-u-poi-8");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	/*
		[ Ilias Zoom 1 ]
	*/
	// animate POIs on hover start
	// show POI label
	$(".i-poi-1").hover(function() {
		var label = $(".i-label-1");
		var infoBox = $(".info-box-i-poi-1");
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".i-poi-2").hover(function() {
		var label = $(".i-label-2");
		var infoBox = $(".info-box-i-poi-2");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".i-poi-3").hover(function() {
		var label = $(".i-label-3");
		var infoBox = $(".info-box-i-poi-3");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".i-poi-4").hover(function() {
		var label = $(".i-label-4");
		var infoBox = $(".info-box-i-poi-4");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".i-poi-5").hover(function() {
		var label = $(".i-label-5");
		var infoBox = $(".info-box-i-poi-5");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".i-poi-6").hover(function() {
		var label = $(".i-label-6");
		var infoBox = $(".info-box-i-poi-6");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".i-poi-7").hover(function() {
		var label = $(".i-label-7");
		var infoBox = $(".info-box-i-poi-7");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
	
	$(".i-poi-8").hover(function() {
		var label = $(".i-label-8");
		var infoBox = $(".info-box-i-poi-8");
		// hide all other POI & InfoBox labels
		showHideLabelAndInfoBox(label, infoBox);
	});
});