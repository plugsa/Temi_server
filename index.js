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
  socket.on('robot_welcome', (msg) => {
    console.log('welcome ');
    io.emit('robot_welcome');
  });
  socket.on('robot_welcome_ns', (msg) => {
    console.log('welcome_ns ');
    io.emit('robot_welcome_ns');
  });
  socket.on('robot_thank', (msg) => {
    console.log('thank ');
    io.emit('robot_thank');
  });
  socket.on('robot_thank_ns', (msg) => {
    console.log('thank_ns ');
    io.emit('robot_thank_ns');
  });
  socket.on('robot_stop', (msg) => {
    console.log('Stop');
    io.emit('robot_stop');
  });
  socket.on('robot_face', (msg) => {
    console.log('face ');
    io.emit('robot_face');
  });
  socket.on('robot_dance', (msg) => {
    console.log('dance ');
    io.emit('robot_dance');
  });
  socket.on('robot_tilt', (msg) => {
    console.log('tilt ');
    io.emit('robot_tilt');
  });
  socket.on('robot_Home', (msg) => {
    console.log('Home ');
    io.emit('robot_Home');
  });
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});