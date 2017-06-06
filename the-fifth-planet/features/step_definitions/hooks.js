/*
 * hooks.js - Cucumber.js hooks for the 5th planet app.
 */
"use strict";

const timekeeper = require("timekeeper");


module.exports = function (cucumber) {
    cucumber.defineSupportCode(function({Before, After}) {
        Before(() => console.error("DEBUG: 5th planet Before hook called."));

        After(() => {
            console.error("DEBUG: 5th planet After hook called.");
            timekeeper.reset();
        });
    });
};
