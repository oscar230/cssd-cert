define(function (require) {
    "use strict";

    var _ = require("underscore");
    // a reducer takes two arguments; current state and the action dispatched
    var reducer = function (state, action) {
        switch (action.type) {
        case "SET_PROPERTY_VALUE":
            // the new state should always be a new object
            return _.extend({}, state, {
            property: action.property,
            propertyValue: action.propertyValue,
            });
        default:
            return state;
        }
    };

    return reducer;
});