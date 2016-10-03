function pow(x, n){
	// check for null, empty, digits and integer
	if (x==null || n==null || x=='' || n=='' || x.replace (/\d/g, '').length || n.replace (/\d/g, '').length || ((x ^ 0) === x) || ((n ^ 0) === n) ) return alert ('Sorry. Wrong x or n.')


	var result=1;
	if(n==0){
		alert(x+' ^ '+n+' = '+'1');
	}
	else if(n<0){
		for(var i=0; i>n; i--){
			result /= x;
		}
	}
	else if(n>0){
		for (var i=0; i<n; i++){
			result *= x;
		}
	}

	console.log(x + ' ^ ' + n + ' = ' + result);
}

pow(prompt('Введите целое число x: ', ''),prompt('Введите целое число степень: ', ''));

var users=[];
var tempWords=['первое', 'второе', 'третье', 'четвертое', 'пятое'];

for (var i=0; i<5; i++){
	var newUser = prompt('Необходимо добавить нового пользователя. Введите ' + tempWords[i] + ' имя: ', '');
	if (newUser == null || newUser == ''){
		i -=1;
	}
	else{
		users.push(newUser);
	}
}

var loginUser = prompt('Введите имя пользователя:', '');
var coincidence=false;

for (var j in users){
	if(loginUser==users[j]){
		coincidence=true;
	}
}
if (coincidence==true){
	alert (loginUser + ', вы успешно вошли.');
}
else{
	alert ('Упс, неверное имя пользователя.');
}