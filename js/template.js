function changingSlide(userChange) {
	
	var id = $('input[name=slideX]:checked').val();

	if(!userChange){
		id++;
		if(id > "4" ){
			id = "0";
		}
	}

	$(`input[name=slideX][value= ${id}]`).prop('checked',true);


	changingCaptionImage(id);
}


function changingCaptionImage(id){
	//$('input[name=slideX]:checked').val();
	$('.carrusel.show').removeClass('show');
	id++;
	var childName = ':nth-child(' + (id) + ')';
	$('.carrusel' + childName).addClass('show');

}

function updateInterval() {
	return setInterval(function(){changingSlide(false)},4000);
}

$(document).ready(function() {
	var automaticSlide = updateInterval();


	$('#slide-selector').change(function(){
		clearInterval(automaticSlide);		
		changingSlide(true);
		automaticSlide = updateInterval();
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



