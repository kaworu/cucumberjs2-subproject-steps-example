/*
 * bootstrap.js - Cucumber.js bootstrap for the planet Earth app.
 */
"use strict";


const cucumber = require("cucumber");

const World = require("./world");
const hooks = require("../step_definitions/hooks");
const steps = {
    fifth: require("../../the-fifth-planet/features/step_definitions/given_steps"),
    earth: require("../step_definitions/app_steps"),
};


hooks(cucumber);
for (let s in steps) {
    const setup = steps[s];
    setup(cucumber);
}

cucumber.defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(World);
});
