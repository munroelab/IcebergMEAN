"use strict";

let express = require('express');
let app = express();

let mongoUtil = require('./mongoUtil');
mongoUtil.connect();

app.use(express.static(__dirname + "/../client"));
app.get("/icebergId", (request, response) => {
  response.json(["One","Two"]);
});
app.listen(8181, () => console.log("Listening on port 8181"));
