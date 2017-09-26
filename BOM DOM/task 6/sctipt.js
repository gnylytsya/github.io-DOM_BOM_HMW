
document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';
document.getElementById('player').style.enter = '50px';


document.body.onkeydown = function (e) {
	var el = document.getElementById('player');

	var KEYCODE_LEFT = 37;
	var KEYCODE_RIGHT = 39;
	var KEYCODE_TOP = 38;
	var KEYCODE_DOWN = 40;
	var KEYCODE_ENTER = 13;
	var KEYCODE_SPACE = 32;

	if (e.keyCode == KEYCODE_LEFT) {
		el.style.left = (parseInt(el.style.left) - 10) + 'px';
	}
	else if (e.keyCode == KEYCODE_RIGHT) {
		el.style.left = (parseInt(el.style.left) + 10) + 'px';
	}
	else if (e.keyCode == KEYCODE_TOP) {
		el.style.top = (parseInt(el.style.top) - 10) + 'px';
	}
	else if (e.keyCode == KEYCODE_DOWN) {
		el.style.top = (parseInt(el.style.top) + 10) + 'px';
	}
	else if (e.keyCode == KEYCODE_ENTER) {
		el.style.enter = (parseInt(el.style.enter) - 10) + 'px';
	}
	else if (e.keyCode == KEYCODE_SPACE) {
		el.style.enter = (parseInt(el.style.enter) + 10) + 'px';
	}
	
	else if ((e.keyCode == KEYCODE_SPACE) || (e.keyCode == KEYCODE_ENTER)) {
		
	$fire=document.createElement("div");
	$player.appendChild($fire);
	$fire.classList.add('fire');
	fireCl=document.getElementsByClassName('fire');
	for (var i = 1; i < fireCl.length; i++) {
		fireCl[i].remove();
	}
	}
};


document.body.onkeyup = function (e) { 

	if ((e.keyCode == KEYCODE_SPACE) || (e.keyCode == KEYCODE_ENTER)) {
		fireCl=document.getElementsByClassName('fire');
		for (var i = 0; i < fireCl.length; i++) {
			fireCl[i].remove();
		}
	}
}

//* jquery function which shows pop-up div before game started

$(function() {
	$('.pop-up').hide();
	$('.pop-up').fadeIn(1000);

	$('.button').click(function (e) {
		$('.pop-up').fadeOut(700);
		e.stopPropagation();
	});
});