/*
 * hooks.js - Cucumber.js hooks for the planet Earth app.
 */
"use strict";

const fifth = require("../../the-fifth-planet/features/step_definitions/hooks");


module.exports = function (cucumber) {
    fifth(cucumber);

    cucumber.defineSupportCode(function({Before, After}) {
        Before(() => console.error("DEBUG: planet Earth Before hook called."));
        After(() => console.error("DEBUG: planet Earth After hook called."));
    });
};
