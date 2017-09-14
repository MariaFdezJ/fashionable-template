var slideCaptions = {
	0 : `<div class="boxing">
						<h3>Slide 1 Caption</h3>
						<p>This is some text. This is some text. This is some text.
	This is some text. This is some text. This is some text.</p>
					</div>`,
	1 : `<div class="boxing">
						<h3>Slide 2 Caption</h3>
						<p>This is some text. This is some text. This is some text.
	This is some text. This is some text. This is some text.</p>
					</div>`,
	2 : `<div class="boxing">
						<h3>Slide 3 Caption</h3>
						<p>This is some text. This is some text. This is some text.
	This is some text. This is some text. This is some text.</p>
					</div>`,
	3 : `<div class="boxing">
						<h3>Slide 4 Caption</h3>
						<p>This is some text. This is some text. This is some text.
	This is some text. This is some text. This is some text.</p>
					</div>`,
	4 : `<div class="boxing">
						<h3>Slide 5 Caption</h3>
						<p>This is some text. This is some text. This is some text.
	This is some text. This is some text. This is some text.</p>
					</div>`	
};


$(document).ready(function() {
	//Function when slide-selector changes
	$('#slide-selector').change(function(){
		changingCaption();
	});
});

setInterval(changingSlide,4000);


function changingSlide() {
	//console.log('klk');
	var id = $('input[name=slideX]:checked').val();
	//console.log(id);
	$(`input[name=slideX][value= ${id}]`).attr('checked',false);
	id++;
	if(id ===5){
		id=0;
	}
	$(`input[name=slideX][value= ${id}]`).attr('checked',true);
	changingCaption();
}

//Function to automatically change slide every X time
function changingCaption(){
	//Clean caption
	$('#slide-caption').empty();
	var id = $('input[name=slideX]:checked').val();
	// id = the value of the input who's name is slideX and that is checked 
	
	//Put new text to caption
	$('#slide-caption').append(slideCaptions[id]);
}