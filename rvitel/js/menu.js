$(document).ready(main);

var contador = 1;

function main(){
	$('#iconomenu').click(function(){
		// $('nav').toggle();

		if(contador == 1){
			$('#menu').animate({
				left: '0%'

			});
			$('article').animate({
				left: '40%'

			});

			contador = 0;
		} else {
			contador = 1;
			$('#menu').animate({
				left: '-100%'
			});
			$('article').animate({
				left: '0%'
			});
		}

	});

};
