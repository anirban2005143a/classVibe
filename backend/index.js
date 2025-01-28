const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const peerServer = require("./peerjs/peerServer"); // Import PeerJS server from peerServer.js
const socketHandler = require("./socket/socket"); // Import socket event handlers

// Initialize Express server
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" } // Allow all origins for testing
});

// PeerJS server is attached to the Express app
app.use("/peerjs", peerServer); // Attach PeerJS to /peerjs

// Call socket handler to listen to connections
socketHandler(io);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
