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

images[3] = "img/spacelichone.png";
images[4] = "img/spacelichtwo.png";
images[5] = "img/spacelichthree.png";

$(document).ready(function() {
	$('.galleryChoice').click(function() {
		var galleryIndex = $(this).attr('value');
		$('.galleryChoice').css('background-color', 'white');
		$('.galleryChoice').css('color', 'black');
		$(this).css('background-color', '#ED872D');
		$(this).css('color', 'white');

		gallery = $(this).parent().prev().find('img.gallery');
		function imageSwitch(index) {
			$(gallery).hide();
			$(gallery).attr("src", images[index]);
			$(gallery).fadeIn();
		}
		imageSwitch(galleryIndex);
	})
});
