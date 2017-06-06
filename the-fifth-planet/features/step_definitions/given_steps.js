/*
 * given_steps.js - Cucumber.js setup steps for the 5th planet app.
 *
 * NOTE: shared with Earth.
 */
"use strict";

const timekeeper = require("timekeeper");


module.exports = function (cucumber) {
    cucumber.defineSupportCode(function({Given}) {
        Given('the time is {int}:{int}:{int}', function (hours, minutes, seconds, callback) {
            const now = new Date();
            now.setHours(hours, minutes, seconds);
            timekeeper.travel(now);
            return callback();
        });
    });
};
