const formElement = document.getElementById('login-form')

formElement.addEventListener("submit", function(event) {
  event.preventDefault();

  if (event.submitter) {
    event.submitter.disabled = true;
  }

  console.log(event)

  // validate form here

  if (event.submitter) {
    event.submitter.disabled = false;
  }

  false // we never actually want to submit the form since this is a proof of concept
});