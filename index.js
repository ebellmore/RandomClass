var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/updateClass', function(req, res){
  res.sendFile(__dirname + '/updateClass.html');
});

app.get('/add', function(req, res){
  res.sendFile(__dirname + '/add.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
    


http.listen(process.env.PORT || '0.0.0.0', function(){
  console.log('listening on *:3000');
});