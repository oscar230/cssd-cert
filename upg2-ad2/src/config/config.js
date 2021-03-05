/* eslint-disable func-names */
/* eslint-disable no-undef */
(function () {
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // overwrite default validate function
  window.validate = function validator() {
    const emailInput = document.querySelector('#email');
    const maxNumInput = document.querySelector('#number');
    let valid = true;

    if (!validateEmail(emailInput.value)) {
      valid = false;
      this.$(emailInput)
        .parent()
        .addClass('has-error')
        .append('<p class="error-message">Måste vara en epostadress.</p>')
        .closest('.panel-body')
        .addClass('highlight-flash');
    }

    if (maxNumInput.value <= 0) {
      valid = false;
      this.$(maxNumInput)
        .parent()
        .addClass('has-error')
        .append('<p class="error-message">Måste vara ett heltak över noll.</p>')
        .closest('.panel-body')
        .addClass('highlight-flash');
    }

    return valid;
  };
}());
