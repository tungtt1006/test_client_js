const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // ...
});

app.get("/test", (req, res) => {
    res.json({ msg: "welcom to the api" });
});

httpServer.listen(3000);