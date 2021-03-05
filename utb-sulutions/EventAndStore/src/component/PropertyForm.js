define(function(require) {
   'use strict';

   const Component = require('Component');
   const template = require('/template/propertyForm');
   const _ = require('underscore');
   const requester = require('requester');
   const router = require('router');
   const store = require('store');

   return Component.extend({
      template,

      className: 'property-wrapper env-p-around--small env-m-around--small',

      events: {
         dom: {
            'click [data-get-property]': 'handleGetProperty'
         }
      },

      handleGetProperty: function() {
        requester.doGet({
           url: router.getUrl('/getProperty'),
           data: {
              property: this.$('[data-property]').val()
           },
           context: this,
        }).done(function (response) {
           console.log(JSON.stringify(response));

           store.dispatch({
              type: 'SET_PROPERTY_VALUE',
              property: response.property,
              propertyValue: response.propertyValue,
           });
           this.$("[data-property]").val("");
        });
      },
   });
});
