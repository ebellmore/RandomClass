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

app.get('/user', function(req, res){
  res.sendFile(__dirname + '/user.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log(msg.selector);
  });
});
    


http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});