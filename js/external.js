var a=1;
	var b=2;
	var c = a + b;
	let car = ["Toyota","Mercedes","BMW","fsda"];
	console.log(car.includes("BMW"))

	//to Get the Person Data
	function getPersonData(){
		const person = {
			name : "YourName",
			age : 61,
			gender: "YourGender",
			weight : 58
		};
		document.getElementById("getPerson").innerHTML = 
	 	"Your name is:<b>" +person.name+ 
	 	"</b><br> Your age is <b>"+ person.age+
	 	 "</b> <br> You gender is:<b>" + person.gender +
	 	 "</b> <br> You weight is: </b>"+ person.weight+"</b>";	
	}

//Function To Get the Current Date
	function getDate(){
		var date = new Date();
		var par = document.getElementById("current_date");
		console.log(par)
		par.innerHTML = date;
		par.style.color = "red";
	}
	//getting Email From Form
	 function getEmail(){
	 	var email = document.getElementById("email").value;
	 	var name = document.getElementById("user_name").value;
	 	var password = document.getElementById("password").value;
	 	var role = document.getElementById("role").value;
	 	var remarks = document.getElementById("remarks").value;
	 	document.getElementById("getEmail").innerHTML = 
	 	"Your email is:<b>" +email+ 
	 	"</b><br> Your UserName is <b>"+ name+
	 	 "</b> <br> You type password:<b>" + password +
	 	 "</b> <br> You select role: </b>"+ role+"</b>";
	 }