/*
 * world.js - Cucumber.js World for the 5th planet app.
 */
"use strict";

const app = require("../../index.js");


module.exports = function World() {
    this.fifth_planet = {
        app: app,
    };
};
