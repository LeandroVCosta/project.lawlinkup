PORT = 3000

const express = require('express');
const path = require('path');
const ejs = require('ejs')

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const router = require('./router')

app.use(router);
// app.use(express.static(path.join(__dirname,'public')));
// app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use('/img', express.static('public/assets/img'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

// let messages = []



io.on('connection', socket => {
    socket.emit('loadMessage', null);
    socket.emit('updateSocketId', socket.id);

    console.log(`Socket Conectado: ${socket.id}`)

    socket.on('sendMessage', data => {
        console.log("Enviando uma Mensagem")
        console.log("Mensagem:" + data)
        io.to(data.socketId).emit('receivedMessage',data);
    });
});

console.log(`Server Running in PORT ${PORT}`)
server.listen(PORT)