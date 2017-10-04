function changingSlide() {
	var buttons = $('input[name=slideX]');
	var index = buttons.index(buttons.filter(':checked'));

	var inputLength = buttons.length;

	index = (index === inputLength - 1 ) ? 0 : index + 1;

	var filterAttr = ':eq(' + index + ')';

	$('input[name=slideX]' + filterAttr).trigger('click');
}


function changingCaptionImage(){
	
	$('.carousel.show').removeClass('show');
		
	var index = $('input[name=slideX]:checked').index();
	var filterAttr = ':eq(' + index + ')';

	$('.carousel' + filterAttr).addClass('show');

}


$(document).ready(function() {

	setInterval(changingSlide,4000);
	
	$('#slide-selector').change(function(){
		changingCaptionImage();
	});
	
	var options = $('#options-dropdown-list');
	
	$('.menu-button').click(function(){
		options.slideToggle();
	});

});
