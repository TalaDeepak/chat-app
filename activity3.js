const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Handle client connections
wss.on('connection', (ws) => {
    console.log('A new client connected.');

    // Handle messages from clients
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    // Handle client disconnections
    ws.on('close', () => {
        console.log('A client disconnected.');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
