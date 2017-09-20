function changingSlide() {
	var buttons = $('input[name=slideX]');
	var index = buttons.index(buttons.filter(':checked'));

	var inputLength = buttons.length;

	if(index + 1 === inputLength) {
		index = 0;
	}
	else{
		index++;
	}
	var filterAttr = ':eq(' + index + ')';

	$('input[name=slideX]' + filterAttr).trigger('click');
}


function changingCaptionImage(){
	
	$('.carrusel.show').removeClass('show');
		
	var index = $('input[name=slideX]:checked').index();
	var filterAttr = ':eq(' + index + ')';

	$('.carrusel' + filterAttr).addClass('show');

}


$(document).ready(function() {

	setInterval(changingSlide,4000);
	
	$('#slide-selector').change(function(){
		changingCaptionImage();
	});
	
	var options = $('#options-list');
	$('.menu-button').click(function(){
		options.slideToggle();
	});

	$( window ).resize(function() {
		if($(window).width() >= 804 && options.is(':hidden')){
			options.css('display','');
  		}
 	});

});
