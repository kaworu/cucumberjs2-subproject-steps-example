/*
 * the 5th planet app.
 */
"use strict";

const express = require("express");
const port = 3000;


// create our app and setup its routes.
const app = express();
app.set("title", "the 5th planet");
app.get("/", (req, res) => {
    const minutes = new Date().getMinutes();
    const state = (minutes % 2 ? "bright" : "dark");
    res.send({street_lamp: state});
});


// launch our app if we're the script executed by node.
if (module === require.main) {
    app.listen(port, () => console.log(`listening on port ${port}`));
}


// export our app.
module.exports = app;
