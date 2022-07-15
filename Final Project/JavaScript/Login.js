function validateLoginForm() {
	var name = document.getElementById("loginName").value;
	var password = document.getElementById("loginPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill up the required fields!"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must contain atleast 8 characters!"
		return false;
	}
	else {
		alert("You have successfully logged in!");
		return true;
	}
}