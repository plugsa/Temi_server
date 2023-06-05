var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('a user connected');
  
  
  socket.on('robot_savea', (msg) => {
    console.log('SaveA ');
    io.emit('robot_savea');
  });
  socket.on('robot_saveb', (msg) => {
    console.log('SaveB ');
    io.emit('robot_saveb');
  });
  socket.on('robot_savec', (msg) => {
    console.log('SaveC ');
    io.emit('robot_savec');
  });
  socket.on('robot_saved', (msg) => {
    console.log('SaveD ');
    io.emit('robot_saved');
  });
  socket.on('robot_savee', (msg) => {
    console.log('SaveE ');
    io.emit('robot_savee');
  });
  socket.on('robot_spin', (msg) => {
    console.log('Spin ');
    io.emit('robot_spin');
  });
  socket.on('robot_welcome', (msg) => {
    console.log('welcome ');
    io.emit('robot_welcome');
  });
  socket.on('robot_thank', (msg) => {
    console.log('Thank ');
    io.emit('robot_thank');
  });
  socket.on('robot_socket', (msg) => {
    console.log('Socket');
    io.emit('robot_socket');
  });
  socket.on('robot_face', (msg) => {
    console.log('Face');
    io.emit('robot_face');
  });
  socket.on('robot_order', (msg) => {
    console.log('Order');
    io.emit('robot_order');
  });
  socket.on('robot_mainpage', (msg) => {
    console.log('Mainpage');
    io.emit('robot_mainpage');
  });
  socket.on('robot_Home', (msg) => {
    console.log('Home ');
    io.emit('robot_Home');
  });

});



class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
    // ส่งคำสั่ง enqueue ไปยัง server Socket.io
    socket.emit('enqueue', element);
    io.emit('enqueue');
  }
  

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty'; 
    }
    // นำรายการออกจากคิว
    const item = this.items.shift();
    // ส่งคำสั่ง dequeue ไปยัง server Socket.io
    socket.emit('dequeue');
    return item;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getQueue() {
    return this.items;
  }
}




http.listen(3000, () => {
  console.log('listening on *:3000');
});

