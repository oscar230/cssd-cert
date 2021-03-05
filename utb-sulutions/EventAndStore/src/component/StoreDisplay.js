define(function(require) {
    'use strict';

    const Component = require('Component');
    const _ = require('underscore');
    const template = require('/template/storeDisplay');

    return Component.extend({
        template,

        className: "storeDisplay-wrapper env-p-around--small env-m-around--small",

        events: {
            store: "handleStoreUpdate",
            self: {
                "state:changed": "render",
            },
        },

        handleStoreUpdate: function(newState) {
            this.setState(newState);
        },

        filterState: function (state) {
        return _.extend(
            {},
            {
            state: state,
            }
        );
        },
    });
});