# Submitting a Form

## Problem
We made a submit form but it isn't working quite right.  The users are able to submit the form with an empty email or password.  We need to validate the form somehow to let the user know if they try to submit a blank email or password.  There is probably room for some other improvements as well, but the main thing is to get the validation working.

We already have some code written to make the form act like other forms in our application.  You will need to use the pattern already established to validate this form.

## Where to Begin
Begin by examing the `index.html` file and opening it in a browser. Your will be editing `index.js` to check whether or not the form is valid and will need to edit `index.html` to display the issue if there is one.

Feel free to edit:
* `index.html`
* `index.js`
* `index.css`

## Requirements
* You may not install any additional dependencies
* Submitting the form must display an error if email is blank
* Submitting the form must display an error if password is blank