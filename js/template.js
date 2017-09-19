var slideCaptions = {
	0 : `<div class="boxing">
						<h3>Slide 1 Caption</h3>
						<p class="social-paragraph">This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text.
						This is some text. This is some text. This is some text.</p>
					</div>`,
	1 : `<div class="boxing">
						<h3>Slide 2 Caption</h3>
						<p class="social-paragraph">This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text.
						This is some text. This is some text. This is some text.</p>
					</div>`,
	2 : `<div class="boxing">
						<h3>Slide 3 Caption</h3>
						<p class="social-paragraph">This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text.
						This is some text. This is some text. This is some text.</p>
					</div>`,
	3 : `<div class="boxing">
						<h3>Slide 4 Caption</h3>
						<p class="social-paragraph">This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text.
						This is some text. This is some text. This is some text.</p>
					</div>`,
	4 : `<div class="boxing">
						<h3>Slide 5 Caption</h3>
						<p class="social-paragraph">This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text. 
						This is some text. This is some text. This is some text.
						This is some text. This is some text. This is some text.</p>
					</div>`	
};
var slideImages = {
	0: "./images/slide/slide1.jpg",
	1: "./images/slide/slide2.jpg",
	2: "./images/slide/slide3.jpg",
	3: "./images/slide/slide4.jpg",
	4: "./images/slide/slide5.jpg",
};


function removeChecked(){
	var inputs = document.getElementsByName("slideX");

	$(`input[name=slideX]`).removeAttr('checked');
	//$(`input[name=slideX]`).removeAttr('defaultChecked');
}

function changingSlide(userChange) {
	
	var id = $('input[name=slideX]:checked').val();
	//console.log('ID checked first: ' + id);
	removeChecked();
	
	if(!userChange){
		id++;
		//console.log('ID checked before: ' + id);
		if(id > "4" ){
			id = "0";
		}
	}

	$(`input[name=slideX][value= ${id}]`).attr('checked',true);
	//$(`input[name=slideX][value= ${id}]`).attr('defaultChecked',true);
	//console.log('ID checked: ' + id);
	changingCaptionImage(id);
}

//Function to automatically change slide every X time
function changingCaptionImage(id){
	//Clean caption
	$('#slide-caption').empty();
	
	//Put new text to caption
	$('#slide-caption').append(slideCaptions[id]);

	//Put new img to slide
	$('.slide-img').attr('src',slideImages[id]);

}



$(document).ready(function() {
	var automaticSlide = setInterval(function(){changingSlide(false)},4000);
	//Function when slide-selector changes
	$('#slide-selector').change(function(){		
		changingSlide(true);
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



