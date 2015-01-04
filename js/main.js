$(document).ready(function() {
	//scroll animation
	$('#introDownArrow').click(function() {
		$('html, body').animate({
        	scrollTop: $("#projectWrapper").offset().top
    	}, 750);
	});	

	//image gallery
	var images = new Array();
	var gallery;

	images[0] = "img/leaguestatsone";
	images[1] = "img/leaguestatstwo";
	images[3] = "img/spacelichone";
	images[4] = "img/spacelichtwo";
	images[5] = "img/spacelichthree";
	images[6] = "img/imgurgalleryone";
	images[7] = "img/imgurgallerytwo";

	var galleryClickActive = false;
	$('.galleryChoice').click(function() {
		if (galleryClickActive == true) {
			return;
		}
		galleryClickActive = true;
	
		//switches active button styles
		var galleryIndex = $(this).attr('value');
		$(this).siblings().removeClass('default');
		$(this).addClass('default');

		//switches active gallery image/lightbox
		gallery = $(this).parent().prev().find('img.gallery');

		imageSwitch(galleryIndex);
		function imageSwitch(index) {
			$(gallery).attr('src', images[index] + 'small.png');
			$(gallery).attr('value', images[index] + '.png');
			$(gallery).hide();
			$(gallery).fadeIn();
			//prevents spamming clicks breaking gallery
			window.setTimeout(function() {galleryClickActive = false}, 400);
		}
	})

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