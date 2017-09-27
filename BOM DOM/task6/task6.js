document.getElementById('player').style.top = '540px';
document.getElementById('player').style.left = '400px';


document.body.onkeydown = function (e) {
	var el = document.getElementById('player');

	var KEYCODE_LEFT = 37;
	var KEYCODE_RIGHT = 39;
	var KEYCODE_DOWN = 40;
	var KEYCODE_UP = 38;
	var KEYCODE_ENTER = 13;
	var KEYCODE_SPACE = 32;
	

	if (e.keyCode == KEYCODE_LEFT && parseInt(el.style.left)) {
		el.style.left = (parseInt(el.style.left) - 5) + 'px';
		el.style.transform = "rotate(270deg)";
	}
	else if (e.keyCode == KEYCODE_RIGHT && parseInt(el.style.left)) {
		el.style.left = (parseInt(el.style.left) + 5) + 'px';
		el.style.transform = "rotate(90deg)";
	}
	else if (e.keyCode == KEYCODE_DOWN && parseInt(el.style.top)) {
		el.style.top = (parseInt(el.style.top) + 5) + 'px';
		el.style.transform = "rotate(180deg)";
	}
	else if (e.keyCode == KEYCODE_UP && parseInt(el.style.top)) {
		el.style.top = (parseInt(el.style.top) - 5) + 'px';
		el.style.transform = "rotate(0deg)";
	}
	else if (e.keyCode == KEYCODE_ENTER) {
		el.classList.add("fire");
	}
	else if (e.keyCode == KEYCODE_SPACE) {
		el.classList.add("fire1");
	
	}

}

document.body.onkeyup = function (u) {
	var KEYCODE_ENTER = 13;
	var KEYCODE_SPACE = 32;
	var el = document.getElementById('player');
	if (u.keyCode == KEYCODE_ENTER) {
		el.classList.remove("fire");
	}
	if (u.keyCode == KEYCODE_SPACE) {
		el.classList.remove("fire1");
	}
}