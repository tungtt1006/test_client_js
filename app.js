const express = require('express')
const { Server } = require("socket.io");

const app = express();
app.use(express.json());
const server = app.listen(3000, () => {
    console.log("app listening on port 3000");
});

const io = new Server(server, {
    pingTimeout: 5000,
    cors: {
        origin: "http://localhost:3006",
        credentials: true,
    },
});

app.get("/test", (req, res) => {
    res.json({ msg: "welcom to the api" });
});

io.on("connection", (socket) => {
    socket.on("new message", (newMessageRecieved) => {
        socket.emit("message recieved", "server respond: " + newMessageRecieved);

        console.log("message recieved", newMessageRecieved);
    });

    socket.off("setup", () => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
    });
});