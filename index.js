const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/resources/pages/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(port, () => {
    let address = server.address().address;
    address = address == "::" && "http://127.0.0.1";
    let serverPort = server.address().port
    console.log(`Listening: ${address}:${serverPort}`);
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log("Bye, Bye!")
    });
})
  