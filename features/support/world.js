/*
 * world.js - Cucumber.js World for the planet Earth app.
 */
"use strict";

const app   = require("../../index.js");
const fifth = require("../../the-fifth-planet/features/support/world");


// helper starting an express if it is not listening already.
function launch(app) {
    if (!(app.get("server") && app.get("server").listening)) {
        // Omit the port argument, or use a port value of 0, to have the
        // operating system assign a random port, which can be retrieved by
        // using server.address().port after the 'listening' event has been
        // emitted.
        //
        // see https://nodejs.org/api/net.html#net_server_listen_port_host_backlog_callback
        console.error(`DEBUG: booting ${app.get("title")}`);
        const server = app.listen(/* port */0);
        app.set("server", server);
    }
}

module.exports = function World() {
    fifth.call(this); // setup this.fifth_planet
    this.earth = {
        app: app,
    };

    // launch the fifth planet app and set its port in earth.
    launch(this.fifth_planet.app);
    const port = this.fifth_planet.app.get("server").address().port;
    app.set("fifth_planet_port", port);

    // launch the planet earth app.
    launch(app);
};
