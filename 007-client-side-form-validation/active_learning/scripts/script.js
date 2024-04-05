// Implementing a customized error message

const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address!");
    } else {
        email.setCustomValidity("");
    }
});

// A more detailed example

const detailedExampleForm = document.querySelector("#more_complex_custom_validation form");
const detailedExampleEmail = document.querySelector("#more_complex_custom_validation #mail");
const detailedExampleEmailError = document.querySelector("#more_complex_custom_validation .error");

detailedExampleEmail.addEventListener('input', (event) => {
    // Each time the user types something, we check if the form fields are valid.
    if (detailedExampleEmail.validity.valid) {
        // In case there is an error message visible, if the field is valid, we remove the error message.
        detailedExampleEmailError.textContent = ''; // Reset the content of the message
        detailedExampleEmailError.className = 'error';
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});

function showError() {
    if (detailedExampleEmail.validity.valueMissing) {
        // If the field is empty, display the following error message.
        detailedExampleEmailError.textContent = 'You need to enter an email address.';
    } else if (detailedExampleEmail.validity.typeMismatch) {
        // If the field doesn't contain an email address, display the following error message
        detailedExampleEmailError.textContent = "Entered value needs to be an email address.";
    } else if (detailedExampleEmail.validity.tooShort) {
        // If the data is too short, display the following error message.
        detailedExampleEmailError.textContent = `Email should be at least 
        ${detailedExampleEmail.minLength} characters; you entered ${detailedExampleEmail.value.length}.`;
    }
    // Set the styling appropriately
    detailedExampleEmailError.className = 'error active';
}

detailedExampleForm.addEventListener('submit', (event) => {
    // if the email field is valid, we let the form submit
    if (!(detailedExampleEmail.validity.valid)) {
        // If it isn't, we display an appropriate error message
        showError();
    }
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
}) 

// An example that doesn't use the constraint validation API

const notUsingConstraintValidationApiForm = document.querySelector("#not_using_constraint_validation_api form");
const notUsingConstraintValidationApiEmail = document.querySelector("#not_using_constraint_validation_api #mail");
const notUsingConstraintValidationApiError = notUsingConstraintValidationApiEmail.nextElementSibling;

// As per the HTML Specification

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field

window.addEventListener("load", () => {
    // Here, we test if the field is empty (remember, the field is not required)
    // If it is not, we check if its content is a well-formed email address.
    const isValid = notUsingConstraintValidationApiEmail.value.length === 0 || emailRegExp.test(notUsingConstraintValidationApiEmail.value);
    notUsingConstraintValidationApiEmail.className = isValid ? "valid" : "invalid";
  });
  
  // This defines what happens when the user types in the field
  notUsingConstraintValidationApiEmail.addEventListener("input", () => {
    const isValid = notUsingConstraintValidationApiEmail.value.length === 0 || emailRegExp.test(notUsingConstraintValidationApiEmail.value);
    if (isValid) {
      notUsingConstraintValidationApiEmail.className = "valid";
      notUsingConstraintValidationApiError.textContent = "";
      notUsingConstraintValidationApiError.className = "error";
    } else {
        notUsingConstraintValidationApiEmail.className = "invalid";
    }
  });
  
  // This defines what happens when the user tries to submit the data
  notUsingConstraintValidationApiForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const isValid = notUsingConstraintValidationApiEmail.value.length === 0 || emailRegExp.test(notUsingConstraintValidationApiEmail.value);
    if (!isValid) {
      notUsingConstraintValidationApiEmail.className = "invalid";
      notUsingConstraintValidationApiError.textContent = "I expect an email, darling!";
      notUsingConstraintValidationApiError.className = "error active";
    } else {
      notUsingConstraintValidationApiEmail.className = "valid";
      notUsingConstraintValidationApiError.textContent = "";
      notUsingConstraintValidationApiError.className = "error";
    }
  });