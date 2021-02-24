/* eslint-disable no-undef */
(function init() {
  // overwrite default validate function
  window.validate = function validator() {
    const emailInput = document.querySelector('input[name=email]');
    const maxadsInput = document.querySelector('input[name=maxads]');
    let valid = true;

    if (emailInput.value < 1) {
      valid = false;
      this.$(emailInput)
        .parent()
        .addClass('has-error')
        .append('<p class="error-message">Email is not valid.</p>')
        .closest('.panel-body')
        .addClass('highlight-flash');
      valid = false;
    }
    if (parseInt(maxadsInput, 10) < 1 || parseInt(maxadsInput, 10) > 100) {
      valid = false;
      this.$(maxadsInput)
        .parent()
        .addClass('has-error')
        .append('<p class="error-message">Max antal tillåtna annonser är utanför skalan, 1 till 100. Behöver du visa fler anonser, vänligen kontakta din administratör.</p>')
        .closest('.panel-body')
        .addClass('highlight-flash');
      valid = false;
    }
    return valid;
  };
}());
