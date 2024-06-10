const express = require('express');
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const socketIoServer = socketIo.Server;
app.use(express.static("client"));
const http1 = http.createServer(app);
const io = new socketIoServer(http1);
io.on("connection",(socket)=>{
    socket.on("sending message event",(data)=>{
        io.emit("io spreading data",data);
    });
});


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/link', function (req, res) {
//     res.send('Gopi')
//   })
    

app.listen(3000)