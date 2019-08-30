$(document).ready(function(){
	console.log("The page is ready!");

// Toggle large class on research item
	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	// Toggle large class on research item

	$('.nav-item').click(function() {
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	$('.btn-all').click(function() {
		$('.resarch-item').addClass('hide');
	});


	var hideAll = function() {
		$('.research-item').addClass('hide');
	}

	$('.btn-car').click(function() {
		hideAll();
		$('.car').removeClass('hide');
	});

	$('.btn-kinect').click(function() {
		hideAll();
		$('.kinect').removeClass('hide');
	});

	$('.btn-tracking').click(function() {
		hideAll();
		$('.tracking').removeClass('hide');
	});

	$('btn-all').click(function() {
		$('.resarch-item').removeClass('hide');
	});

});




