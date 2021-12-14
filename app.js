const express = require("express");
const server = express();

server.get("/", (request, response) => {
  response.send("Express JS");
});
module.exports = server;
server.listen(3000);
