/*
 * bootstrap.js - Cucumber.js bootstrap for the 5th planet app.
 */
"use strict";


const cucumber = require("cucumber");

const World = require("./world");
const hooks = require("../step_definitions/hooks");
const steps = {
    given: require("../step_definitions/given_steps"),
    app:   require("../step_definitions/app_steps"),
};


hooks(cucumber);
for (let s in steps) {
    const setup = steps[s];
    setup(cucumber);
}

cucumber.defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(World);
});
