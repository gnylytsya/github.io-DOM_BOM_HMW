//function for iHTML elements and include start to create inputs
var $formEl = document.createElement('form');
$formEl.classList.add('validation__form')
document.querySelector('#form').appendChild($formEl);
$formEl.addEventListener('submit',one);
var getForm = document.forms[1];
var $age = new InputEl('Enter your age','input','text','age','required age','off','0-36');
var $username = new InputEl('Enter your username','input','text','username','required username','off','should start with: **user_**... , user_...');
var $date = new InputEl('Enter date','input','text','date','required date current','off','dd/mm/yyyy');
//function for inputs
function InputEl(labelText,tag,type,name,data,autocomplete,placeholder) {
var $label=document.createElement('label');
var $div =document.createElement('div');
var $formEl = document.createElement(tag);
var show = function(){
$formEl.setAttribute('type',type);
$formEl.setAttribute('name',name);
$formEl.setAttribute('data-rule',data);
$formEl.setAttribute('autocomplete',autocomplete);
$formEl.setAttribute('placeholder',placeholder);
$label.innerHTML = labelText;
getForm.appendChild($div).appendChild($label).appendChild($formEl);
}
show();
}
//create button
(function submitEl(){
var $button = document.createElement('input');
$button.setAttribute('type','submit');
$button.setAttribute('value','Validate me');
$button.setAttribute('data-rule','one');
$button.innerHTML='Submit';
getForm.appendChild($button);
})()
//обєкт в якому в вигляді методів зберігаю правила для валідації
var rules = {
//щоб ніде не була пуста стрічка
required: function(e){
if(e.value!='') {
return true;
}
return false;
},
age: function(e) {
var reg = /^[0-9]{1,36}$/;
if(reg.test(e.value)){
e.style.borderColor='lightblue'
return true
}
e.style.borderColor='red'
},
username: function(e) {
var reg = /^[*]{0,2}user_[*]{0,2}([0-9]{0,10}[a-z]{1,20})|([@]{1}[a-z]{4,8}\.[a-z]{2,4})$/;
if(reg.test(e.value)){
e.style.borderColor='lightblue'
return true
}
e.style.borderColor='red'
},
date: function(e) {
var date = new Date();
var reg = date.toLocaleDateString('en-GB');
if(e.value ===reg){
e.style.borderColor='lightblue'
return true;
}
e.style.borderColor='red'
return false;
}
}
//validator function
function one(e){
//змінна де зберігатимуться помилки в масиві
var errors=[];
//спочатку дістаємо всі елементи аформи(label include input but lsbel isnot a elemrnt of form)
var inputsAll = document.forms[1].elements;
for(var i =0;i<inputsAll.length;i++){

//так як маємо декільк  правил в data-rules , то в масив і розбиваємо
var rulesList = inputsAll[i].dataset.rule;
rulesList = rulesList.split(' ');
//для кожного правила робимо провірку
for(var j = 0;j<rulesList.length;j++){
//якщо існує такий
if(rulesList[j] in rules) {
// запускаю правило для валідації
if(!rules[rulesList[j]](inputsAll[i])){
//добавляємо помилки в масив
errors.push({
name: inputsAll[i].name,
error: rulesList[j]
});
}
}
}
}
//провіряю на довжину, якщо були помилки то запишуться і довжина мас. збільшиться
if(errors.length > 0){
//відміняю дію за замовчуванням
e.preventDefault()
// помилки в функцію яка виводить їх
showErrors(errors);
}
}
//for errors
function showErrors(arr){
console.log(arr)
alert("Hi,bro, it's no good!Your answer must include next val: \n\
1.for age input: 0-36;\n\
2.for username input: **user_**test , **user_**213kjasd, \n\
user_@gmail.com ; \n\
3.for data input: (format dd/mm/yyyy);")
}
