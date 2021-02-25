/* eslint-disable no-undef */
(function init() {
  // Validator for email adresses
  const validEmail = (email) => typeof email === 'string' && email.length > 0;
  // Validator for numbers
  const validNum = (num) => typeof num === 'number' && num > 0 && num < 100;
  // overwrite default validate function
  window.validate = function validate() {
    const emailInput = document.querySelector('input[name=admin]');
    const maxNumInput = document.querySelector('input[name=maxNum]');
    let valid = true;
    if (validEmail(emailInput)) {
      this.$(emailInput)
        .parent()
        .addClass('has-error')
        .append('<p class="error-message">Epostadress ej korrekt.</p>')
        .closest('.panel-body')
        .addClass('highlight-flash');
      valid = false;
    }
    if (validNum(maxNumInput)) {
      this.$(maxNumInput)
        .parent()
        .addClass('has-error')
        .append('<p class="error-message">Vänligen mata in ett värde mellan 0 och 100.</p>')
        .closest('.panel-body')
        .addClass('highlight-flash');
      valid = false;
    }
    return valid;
  };
}());
