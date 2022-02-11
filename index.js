const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const port = 3000;

app.use(express.static('resources'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/resources/pages/index.html');
});

io.on('connection', (socket) => {
    console.log('connected');
    socket.on('disconnect', () => {
        console.log('disconnected')
    });

    socket.on('bug', (err) => {
        console.error('An error occurred')
        console.error(`Details: ${err}`)
        io.emit('bug', err);
    });
});

server.listen(port, () => {
    console.log(`Listen on port ${port}`);
});