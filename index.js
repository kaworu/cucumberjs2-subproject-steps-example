/*
 * planet Earth app.
 */
"use strict";

const express = require("express");
const request = require("request");
const port = 3001;


// create our app and setup its routes.
const app = express();
app.set("title", "planet Earth");
app.get("/look-at-the-fifth-planet", (req, res, next) => {
    const fifth_planet_port = app.get("fifth_planet_port");
    const fifth_planet_uri  = "http://localhost:" + fifth_planet_port;
    request(fifth_planet_uri, (err, rsp) => {
        if (err)
            return next(`Unable to find the 5th planet`);
        const is_night = (JSON.parse(rsp.body).street_lamp === "bright");
        res.send(`<html>
            <head><title>The fifth planet seen from Earth</title></head>
            <body><p>It is ${is_night ? "☾ night" : "☼ day"} time</p></body>
        </html>`);
    });
});


// launch our app if we're the script executed by node.
if (module === require.main) {
    app.set("fifth_planet_port", 3000); // see the-fifth-planet/index.js
    app.listen(port, () => console.log(`listening on port ${port}`));
}


// export our app.
module.exports = app;
