
var personsList = document.getElementsByClassName("employeeList")[0].innerText

function addNew() {

	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var salary = document.getElementById('salary').value;
	var position = document.getElementById('position').value;
	var limit = document.getElementById('limit').value;
	var average = parseInt(document.getElementById('average').value);
	
	var list = document.getElementsByClassName("employeeList")[0];
	var newEmployee = document.createElement('li')


	var employeeFirstName = document.createElement('span')
	employeeFirstName.className = 'employeeFirstName'
	employeeFirstName.innerText = firstName + ' ';
	var employeeLastName = document.createElement('span')
	employeeLastName.className = 'employeeLastName'
	employeeLastName.innerText = lastName + ' ';
	var employeeSalary = document.createElement('span')
	employeeSalary.className = 'employeeSalary'
	employeeSalary.innerText = salary + ' ';
	var employeePosition = document.createElement('span')
	employeePosition.className = 'employeePosition'
	employeePosition.innerText = position;

	newEmployee.appendChild(employeeFirstName)
	newEmployee.appendChild(employeeLastName)
	newEmployee.appendChild(employeeSalary)
	newEmployee.appendChild(employeePosition)

	var newlist = document.getElementsByClassName("employeeList")[0].getElementsByTagName('li')

	var person = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;


	var spacesPattern = /^[\s]+$/; // RegEx pattern to review if text contains no chars, only spaces
	var namePattern = /^([A-Za-z]{2}[ éàëA-Za-z]*)$/;  //RegEx pattern for validation of Usernames


	if (position.length === 0 || firstName.length === 0 || lastName.length === 0 || position.length === 0 ){
		alert('Some fields are empty')
	}
	else if (isNaN(salary) || typeof(parseInt(salary)) !== 'number' || salary.length === 0 || parseInt(salary) <= 0) {
		alert('Salary data is not valid!')
	} else if (!firstName.match(namePattern) || !lastName.match(namePattern)) {
		alert('Username data is not valid!')
	} else if ( position.length === 0 || !position.match(namePattern) ) {
		alert('Position data is not valid!')
	} else {


		if (average >= 2000) {
			alert('You can\'t get more than ' + limit + ' new employees, avarage salary os over 2000')
		} else if (newlist.length < limit) {
			for (var i = 0; i < newlist.length; ++i) {
				console.log('i', i)
				if (newlist[i].innerText.includes(person)) {
					console.log(newlist[i].innerText.includes(person))
					console.log('newlist',i, newlist[i].innerText)
					console.log('person' ,person)
					alert('This person is already in list. Check it up!')
					return;
				}
			} 
			personsList += person;
			console.log(personsList)
			list.appendChild(newEmployee) 


		} else {
			alert('You can\'t get more than ' + limit)
		}
	}

}

/*function which shows all employees in system now*/
function showNumbersOfEmployees() {
	var inSystem = document.getElementById('inSystem');
	inSystem.textContent = "Employees in system: " + li.length;
}
showNumbersOfEmployees();

function showAverageSalary() {
	var getSalary=document.querySelectorAll('.employeeSalary');
	var matchSalaryArr=[];
	for (var i = 0; i < getSalary.length; i++) {
		var textSalary=getSalary[i].textContent;
		var matchSalary = textSalary.match(/\d/g);
		var matchSalaryJoin = matchSalary.join('');
		matchSalaryArr.push(matchSalaryJoin);
		for (var j = 0; j< matchSalaryArr.length; j++) {
			var average = eval(matchSalaryArr.join('+')) / matchSalaryArr.length;
		}
	}
	if(li.length==0) {
		average=0;
		averageSalary.textContent = "Average salary:  "+"$ "+average.toFixed(2);
	}
	averageSalary.textContent = "Average salary:  "+"$ "+ average.toFixed(2);
	return average;
}
showAverageSalary();


