$(document).ready(function() {

	$('#down').click(function() {
		console.log('success');
		$('html, body').animate({ scrollTop: $(document).height()}, 1000);
	});	
});
