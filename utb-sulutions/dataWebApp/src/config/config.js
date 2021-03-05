/* eslint-disable no-undef */
(function init() {
  // overwrite default validate function
  window.validate = function validator() {
    const emailInput = document.querySelector('input[name=email]');
    let valid = true;

    if (emailInput.value < 1) {
      valid = false;
      this.$(emailInput)
        .parent()
        .addClass('has-error')
        .append('<p class="error-message">Email is not valid</p>')
        .closest('.panel-body')
        .addClass('highlight-flash');
    }

    return valid;
  };
}());
