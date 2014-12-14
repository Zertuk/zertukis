$(document).ready(function() {
	$('#introDownArrow').click(function() {
		console.log('success');
		$('html, body').animate({ scrollTop: 725}, 500);
	});	
});
