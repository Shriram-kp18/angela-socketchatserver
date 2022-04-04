const app=require('express')(); //dclaring the express
const port=4200; //setting port
const socketio=require('socket.io');   //requiring socket
var io;   //for accessing socket io from the varible

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

io=socketio.listen(app.listen(port)); //listening port via socket

//for getting ip address we can use socket.handshake.address

io.on('connection',(socket)=>{
    console.log('connected');
    socket.send('The message box is online');
    socket.on('message',(data)=>{
        io.sockets.emit('message',data);
    });
});