$(document).ready(function() {

	$('#down').click(function() {
		console.log('success');
		$('html, body').animate({ scrollTop: $(document).height()}, 1000);
	});	

    $("#right").click(function() {
    	$('#space_lich_omega').fadeOut('slow');
        $('#imgur').fadeIn('slow');
    });
});


