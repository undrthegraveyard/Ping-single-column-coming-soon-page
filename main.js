document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('errorMessage');

  emailInput.setCustomValidity(""); // Clear any custom error messages
  errorMessage.style.display = 'none'; // Hide error message
});

document.getElementById('input-button').addEventListener('submit', function(event) {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('errorMessage');

  if(!validateEmail(emailInput.value)){
    event.preventDefault();
    emailInput.setCustomValidity("Please provide a valid email address");
    errorMessage.style.display = 'block';
  } else{
    emailInput.setCustomValidity("");
    errorMessage.style.display= 'none';
  }
});

removeError();

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function removeError(){
  document.getElementById('email').addEventListener('input', function() 
{
   const errorMessage = document.getElementById('errorMessage');
   errorMessage.style.display = 'none';
});
};

