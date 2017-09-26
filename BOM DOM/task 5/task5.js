var onClick = function (e) {
	var $el = e.target;

	e.stopPropagation();

	$el.style.backgroundColor = 'yellow';
		alert('CLICK!');
}

box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;

var onClick2 = function (e) {
	var $el = e.target;
	$el.style.backgroundColor = 'yellow';
	alert('CLICK!');
}


box4.onclick = onClick2;
box5.onclick = onClick2;
box6.onclick = onClick2;