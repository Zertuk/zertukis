$(document).ready(function() {
	//scroll animation
	$('#introDownArrow').click(function() {
		$('html, body').animate({
        	scrollTop: $("#projectWrapper").offset().top
    	}, 750);
	});	

	//lightbox
	$('.gallery').click(function() {
		$('#projectLightbox').fadeIn('fast');
		var	lightboxImage = $(this).attr('value');
		$('#projectLightboxImage').attr('src', lightboxImage);
	});

	$('#projectLightbox').click(function() {
		$('#projectLightbox').hide();
	});
});