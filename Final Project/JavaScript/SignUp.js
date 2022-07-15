function validateSignupForm() {
	var mail = document.getElementById("signupEmail").value;
	var name = document.getElementById("signupName").value;
	var password = document.getElementById("signupPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill up the required fields!"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must contain atleast 8 characters!"
		return false;
	}
	else {
		alert("You have successfully signed up!");
		return true;
	}
}