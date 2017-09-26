var save = document.querySelector('#save');

save.addEventListener('click', showPopup);
function showPopup() {
	document.getElementsByClassName('modal')[0].style.top = '50%';
}

var close = document.querySelector('.ok')

close.addEventListener('click', hidePopup);
function hidePopup(){
	document.getElementsByClassName('modal')[0].style.top = '-50%';
}


var applyLanguage = function (lang) {
	alert('now language is: ' + lang);
}

var getCurrentLanguage = function () {
	var defaultLanguage = 'ua';
	var savedLanguage = localStorage.getItem('lang');
	if (localStorage && savedLanguage) {defaultLanguage = savedLanguage}
	return defaultLanguage;
};
var currentLanguage = getCurrentLanguage();

translate(currentLanguage);
function translate(lang) {
	var languages = document.getElementsByClassName('lang-' + lang);
	checking(lang);
	for (var i=0; i < languages.length; i++) {
		var elem = languages[i];
		elem.classList.add('visible')}
}


save.addEventListener('click', checkBtns)
function checkBtns(){
	var checkedradioBtns = document.querySelector('#languages input[name="lang"]:checked').parentNode;
	if (checkedradioBtns) {
		var language = checkedradioBtns.innerText.toLowerCase()
		if (localStorage) {localStorage.setItem('lang', language);}
		applyLanguage(language);

		var visible = document.querySelectorAll('.lang.visible');
		if (visible) { [].forEach.call(visible, removeVisible)
					  function removeVisible(elem) {elem.classList.remove('visible'); }
					 }
		translate(language);
	}
};

function checking(lang) {
	var radioBtns = document.querySelectorAll('#languages input[name="lang"]');
	for (var i = 0; i < radioBtns.length; i++) {
		radioBtns[i].removeAttribute('checked');
		if (radioBtns[i].parentNode.innerText === lang) {
			radioBtns[i].setAttribute('checked', 'checked');
		}
	}
}

