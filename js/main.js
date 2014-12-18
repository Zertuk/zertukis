$(document).ready(function() {
	$('#introDownArrow').click(function() {
		console.log('test');
		$('html, body').animate({
        	scrollTop: $("#projectWrapper").offset().top
    	}, 1000);
	});	
});


//image gallery

var images = new Array();
var gallery;

images[0] = "img/leaguestatsone.png";
images[1] = "img/leaguestatstwo.png";
images[3] = "img/spacelichone.png";
images[4] = "img/spacelichtwo.png";
images[5] = "img/spacelichthree.png";
images[6] = "img/imgurgalleryone.png";
images[7] = "img/imgurgallerytwo.png";

$(document).ready(function() {
	$('.galleryChoice').click(function() {
		var galleryIndex = $(this).attr('value');
		$('.galleryChoice').css('background-color', 'white');
		$('.galleryChoice').css('color', 'black');
		$(this).css('background-color', '#ED872D');
		$(this).css('color', 'white');

		gallery = $(this).parent().prev().find('img.gallery');
		function imageSwitch(index) {
			$(gallery).attr('src', images[index]);
			$(gallery).attr('value', images[index]);
			$(gallery).hide();
			$(gallery).fadeIn();
		}
		imageSwitch(galleryIndex);
	})
});

$('.gallery').click(function() {
	$('#projectLightbox').fadeIn('fast');
	var	lightboxImage = $(this).attr('value');
	$('#projectLightboxImage').attr('src', lightboxImage);
});

$('#projectLightbox').click(function() {
	$('#projectLightbox').hide();
})