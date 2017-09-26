var myForm = document.createElement("form");
myForm.setAttribute("name", "login");
myForm.setAttribute("action", "https://www.google.com.ua");

var inputAge = document.createElement("input");
inputAge.setAttribute("type", "text");
inputAge.setAttribute("name", "age");
inputAge.setAttribute("placeholder", "Age");
inputAge.setAttribute("id", "age");

var inputUser = document.createElement("input");
inputUser.setAttribute("type", "text");
inputUser.setAttribute("name", "username");
inputUser.setAttribute("placeholder", "user_name");
inputUser.setAttribute("id", "username");

var inputDate = document.createElement("input");
inputDate.setAttribute("type", "text");
inputDate.setAttribute("name", "date");
inputDate.setAttribute("placeholder", "Date");
inputDate.setAttribute("id", "date");

var inputValidate = document.createElement("input");
inputValidate.setAttribute("type", "submit");
inputValidate.setAttribute("value", "Validate Me");
inputValidate.setAttribute("id", "validate");

document.body.appendChild(myForm);
myForm.appendChild(inputAge);
myForm.appendChild(inputUser);
myForm.appendChild(inputDate);
myForm.appendChild(inputValidate);


var submit = document.getElementById('validate');
submit.addEventListener('mousedown', validationMe);

var date = document.getElementById('date');
date.addEventListener('click', function(){
	date.setAttribute('value', moment().format("DD/MM/YYYY"))});

function validationMe(){
	var age = document.getElementById('age');
	var ageValue = age.value;
	var username = document.getElementById('username');
	var usernameValue = username.value;
	var dateValue = date.value;

	if (!Number.isInteger(Number(ageValue)) || Number(ageValue) <0 || ageValue.match(' ') || ageValue.length < 1 || ageValue.match('e')){alert('your data is invalid (age)')};
	if (!usernameValue.startsWith("user_")){alert('your data is invalid (username)')}
	if (!moment(dateValue, "DD/MM/YYYY", true).isValid() || dateValue !== moment().format("DD/MM/YYYY")){alert('your data is invalid (date)')}

}
//	if((age) && (username) && (date)) {
//		myForm.setAttribute("onsubmit"," return validationMe()");


	
//	return true;
//}
//else {
//	return false;
//}
