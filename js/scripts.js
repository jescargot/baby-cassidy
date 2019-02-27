var password = '';

function checkPass(){
var password = document.getElementById("userInput").value;
//const password = document.getElementById("userInput").value; -- USE A CONST INSTEAD??
	//document.write(password);
	
	if(password === "freindsandfamily"){
		window.open('https://docs.google.com/document/d/1na-N9BOIWwxLORnJT3KI915NkRYxpiguTU-iDdLj0c4/edit')
		//window.location.href='https://docs.google.com/document/d/1na-N9BOIWwxLORnJT3KI915NkRYxpiguTU-iDdLj0c4/edit'
	}
	else if(password === "secret"){
		console.log(password);
		window.open("https://www.google.com");
		//window.location.href="https://www.google.com";
	}

	else{
		alert('Password Not Found, Bro!');
	}

}



//function init(){
//	password = '';
//}
