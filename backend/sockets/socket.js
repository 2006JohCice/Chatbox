module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('a user connected');
    console.log('User connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });

    socket.on('CLIENT_SEND_MESAGE', (data) => {
        console.log('Received message from client:', data);
        io.emit('receive_message', data);
    });
  });
};