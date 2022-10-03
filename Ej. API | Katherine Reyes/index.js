const express = require("express")
const server = express

server.request(express.static(__dirname + "public"));
server.listen(8080, () => console.log("servidor corriendo..."));