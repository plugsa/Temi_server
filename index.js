var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat_message3', (msg) => {
    console.log('right: ');
    io.emit('robot_goright');
  });
  socket.on('chat_message2', (msg) => {
    console.log('Left ' + msg);
    io.emit('robot_goleft');
  });
  socket.on('chat_message1', (msg) => {
    console.log('Forward ');
    io.emit('robot_gofront2');
  });
  socket.on('robot_savea', (msg) => {
    console.log('SaveA ');
    io.emit('robot_savea');
  });
  socket.on('robot_saveb', (msg) => {
    console.log('SaveB ');
    io.emit('robot_saveb');
  });
  socket.on('robot_spin', (msg) => {
    console.log('Spin ');
    io.emit('robot_spin');
  });
  socket.on('robot_play', (msg) => {
    console.log('Play ');
    io.emit('robot_play');
  });
  socket.on('robot_stop', (msg) => {
    console.log('Stop ');
    io.emit('robot_stop');
  });

});

http.listen(4000, () => {
  console.log('listening on *:4000');
});