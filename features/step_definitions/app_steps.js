/*
 * app_steps.js - Cucumber.js steps for the planet Earth app.
 */
"use strict";

const expect  = require("chai").expect
const request = require("request")


module.exports = function (cucumber) {
    cucumber.defineSupportCode(function({When, Then}) {
        When('I look at the fifth planet', function (callback) {
            const world = this;
            const port  = world.earth.app.get("server").address().port;
            const uri   = `http://localhost:${port}/look-at-the-fifth-planet`;
            request(uri, (err, rsp) => {
                if (rsp)
                    world.earth.rsp = rsp;
                return callback(err);
            });
        });

        Then(/I should( not)? see the street lamp/, function (not, callback) {
            const regexp = (not ? /day time/ : /night time/);
            expect(this.earth.rsp).to.exist;
            expect(this.earth.rsp.body).to.match(regexp);
            return callback();
        });
    });
};
