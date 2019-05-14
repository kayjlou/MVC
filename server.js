const express = require("express");
const { join } = require("path");

const app = express();

//Join together with public folder
app.use(express.static(join(__dirname, "public")));
//Middleware for handling put requests with json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Connection
require("./config").connect(_ =>
  app.listen(3000, console.log("listening on port 3000"))
);
