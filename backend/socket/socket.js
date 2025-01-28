let roomOwners = {};

const socketIo = (io) => {

    io.on("connection", (socket) => {
        console.log(socket.id + " socket id")

        //create room
        socket.on("createRoom", (data) => {
            if (!roomOwners[data.roomNo]) {
                roomOwners[data.roomNo] = data.peerId
                socket.join(data.roomNo)
                socket.emit("roomCreated", "successfully room created")
            }
        })

        //join room
        socket.on("joinRoom", (roomNo) => {
            // if(roomOwners[data.roomNo]){
            socket.join(roomNo)
            // socket.emit("roomOwner", roomOwners[roomNo])
            console.log("join successfully " + roomNo )
            // }else{
            //     socket.emit("roomNotFound" , "Room does not exist")
            // }
        })

        //send message
        socket.on("sendMessage", (data) => {
            io.to(data.roomNo).emit("message", data.message)
        })
    })
}

module.exports = socketIo
