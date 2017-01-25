"use strict";

let express = require('express');
let app = express();

app.use(express.static(__dirname + "/../client"));
app.get("/iceberg", (request, response) => {
  response.json(["1","2"]);
});
app.listen(8181, () => console.log("Listening on port 8181"));
