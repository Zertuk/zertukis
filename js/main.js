$(document).ready(function() {
	$('#introDownArrow').click(function() {
		console.log('test');
		$('html, body').animate({
        	scrollTop: $("#projectWrapper").offset().top
    	}, 1000);
	});	
});
