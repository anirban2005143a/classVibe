const { ExpressPeerServer } = require("peer"); // Import PeerJS server
const http = require("http"); // Import http to create the server

// Initialize PeerJS server with the express server
const peerServer = ExpressPeerServer(http.createServer(), { debug: true });

// Export the peerServer so it can be used in server.js
module.exports = peerServer;
