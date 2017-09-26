/*
* key codes from http://keycode.info/
*/
KEYCODE_LEFT = 37;
KEYCODE_RIGHT = 39;
KEYCODE_UP = 38;
KEYCODE_DOWN = 40;
KEYCODE_SPACE = 32;
KEYCODE_ENTER = 13;

$plane = document.getElementById('plane');

speed=15;

/*
* main function of moving plane and fire show
*/

$('.button').click(function (e) {
document.body.onkeydown = function (e) {

if (e.keyCode == KEYCODE_LEFT) {
if((parseInt($plane.style.left || '600'))>0) {
$plane.style.left = (parseInt($plane.style.left || '600') - 1*speed) + 'px';
}
$plane.classList.add('turn-left');
$plane.classList.remove('turn-right');
$plane.classList.remove('turn-top');
$plane.classList.remove('turn-bottom');
}

else if (e.keyCode == KEYCODE_RIGHT) {
if((parseInt($plane.style.left || '600'))<(window.outerWidth-165)) {
$plane.style.left = (parseInt($plane.style.left || '600') + 1*speed) + 'px';
}
$plane.classList.add('turn-right');
$plane.classList.remove('turn-left');
$plane.classList.remove('turn-top');
$plane.classList.remove('turn-bottom');
}

else if (e.keyCode == KEYCODE_UP) {
if((parseInt($plane.style.top || '100')) > 10) {
$plane.style.top = (parseInt($plane.style.top || '100') - 1*speed) + 'px';
}
$plane.classList.add('turn-top');
$plane.classList.remove('turn-right');
$plane.classList.remove('turn-left');
$plane.classList.remove('turn-bottom');
}

else if (e.keyCode == KEYCODE_DOWN)  {
if((parseInt($plane.style.top || '100')) < (window.outerHeight-245)) {
$plane.style.top = (parseInt($plane.style.top || '100') + 1*speed) + 'px';
}
$plane.classList.add('turn-bottom');
$plane.classList.remove('turn-top');
$plane.classList.remove('turn-right');
$plane.classList.remove('turn-left');
}

else if ((e.keyCode == KEYCODE_SPACE) || (e.keyCode == KEYCODE_ENTER)) {

$fire=document.createElement("div");
$plane.appendChild($fire);
$fire.classList.add('fire');
fireCl=document.getElementsByClassName('fire');
for (var i = 1; i < fireCl.length; i++) {
fireCl[i].remove();
}
}
}
});

/*
* when key up, remove fire show
*/

document.body.onkeyup = function (e) { 

if ((e.keyCode == KEYCODE_SPACE) || (e.keyCode == KEYCODE_ENTER)) {
fireCl=document.getElementsByClassName('fire');
for (var i = 0; i < fireCl.length; i++) {
fireCl[i].remove();
}
}
}

/*
* jquery function which shows pop-up div before game started
*/

$(function() {
$('.pop-up').hide();
$('.pop-up').fadeIn(1000);

$('.button').click(function (e) {
$('.pop-up').fadeOut(700);
e.stopPropagation();
});
});