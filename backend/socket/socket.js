let roomOwners = {};

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        // When a user creates a room
        socket.on("createRoom", (roomName, peerId) => {
            if (!roomOwners[roomName]) {
                roomOwners[roomName] = peerId; // Store the owner's PeerJS ID
                socket.join(roomName);
                console.log(`Room ${roomName} created by ${peerId}`);
            } else {
                socket.emit("roomExists", "Room already exists!");
            }
        });

        // When a user joins an existing room
        socket.on("joinRoom", (roomName) => {
            if (roomOwners[roomName]) {
                socket.join(roomName);
                socket.emit("ownerPeerId", roomOwners[roomName]); // Send owner’s PeerJS ID to the user
                console.log(`User ${socket.id} joined room ${roomName}`);
            } else {
                socket.emit("roomNotFound", "Room does not exist.");
            }
        });

        // Handle disconnections
        socket.on("disconnect", () => {
            console.log(`User ${socket.id} disconnected`);
        });
    });
};
