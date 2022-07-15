var form = document.getElementById('form')
form.addEventListener('submit', function(e){
  e.preventDefault()

  var name = document.getElementById('fullname')
  var email = document.getElementById('email')
  var message = document.getElementById('message')

  if(fullname.value == "" || email.value == "" || message.value == ""){
    alert("Please fill up the required details!S")
  }
  else {
    alert("Your form is submitted successfully!")
  }
})