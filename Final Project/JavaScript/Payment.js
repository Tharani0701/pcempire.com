function validatePaymentForm() {
	var name = document.getElementById("card-holder").value;
	var cvv = document.getElementById("cvv-input").value;
    var number = document.getElementById("card-number").value;

	if (name == "" || cvv == "" || number == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill up the required fields!"
		return false;
	}

	else if (cvv.length < 3) {
		document.getElementById("errorMsg").innerHTML = "Your cvv must contain 3 digits"
		return false;
	}

    else if (number.length < 16) {
		document.getElementById("errorMsg").innerHTML = "Your card number must contain 16 digits"
		return false;
	}

	else {
		alert("You have successfully made payment!");
		return true;
	}
}