/*
 * app_steps.js - Cucumber.js steps for the 5th planet app.
 */
"use strict";

const expect    = require("chai").expect
const supertest = require("supertest");


module.exports = function (cucumber) {
    cucumber.defineSupportCode(function({When, Then}) {
        When('I look at the fifth planet', function (callback) {
            const world = this;
            const app   = world.fifth_planet.app;
            supertest(app).get("/").end((err, rsp) => {
                world.fifth_planet.rsp = rsp;
                return callback(err);
            });
        });

        Then(/I should( not)? see the street lamp/, function (not, callback) {
            const state = (not ? "dark" : "bright");
            expect(this.fifth_planet.rsp).to.exist;
            expect(this.fifth_planet.rsp.body.street_lamp).to.exist.and.to.eql(state);
            return callback();
        });
    });
};
