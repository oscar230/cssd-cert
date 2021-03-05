define(function (require) {
  'use strict';

  const Component = require('Component');
  const template = require('/template/main');

  return Component.extend({
    template,

    className: 'webapp-boilerplate',

    events: {
      dom: {
        'click button': 'handleButtonClick'
      },
      state: {
        "state:changed": "render"
      }
    },

    handleButtonClick: function (event) {
      console.log(event);
      console.log(this.$('input[name="message"]').val());
      
      this.setState('message', this.$('input[name="message"]').val());
    },

    filterState: ({ message }) => ({
      message,
    }),
  });
});
