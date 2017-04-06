const express = require('express');
const WebSocket = require('ws');
const uuid = require('node-uuid');

const PORT = 3001;

const pickAColor = () => {
    colors = ['#ff0000','#00ff00','#0000ff','#ff66ff','#00ccff', '#cc00cc','#99ccff'];
    return colors[Math.round(Math.random() * colors.length - 1)];
}

const server = express()
    .use(express.static('public'))
    .listen(PORT,() => {
        console.log('Server started..');
    });

const wss = new WebSocket.Server({ server });
broadcast = (data) => {
    wss.clients.forEach((client) => {
        if (client.readyState == WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    })
}

wss.on('connection',(ws) => {
    broadcast({ type: 'maintenance', users_connected: wss.clients.size });
    let user_color = pickAColor();
    ws.send(JSON.stringify({ type: 'maintenance', user_color: user_color }));
    ws.on('close',() => {
        broadcast({ type: 'maintenance', users_connected: wss.clients.size  });
    });
    ws.on('message',(data) => {
        const message = JSON.parse(data);
        message.id = uuid.v4();
        // console.log(message);
        const image_url = message.content.match(new RegExp(/(https?:\/\/.+\/.+(.jpg|.gif|.png))/));
        if (image_url) {
            console.log('Deu math',image_url);
            message.content = message.content.slice(0,image_url.index - 1);
            message.image_url = image_url[0];
        }
        console.log('Message:',message);
        broadcast(message);
    })
});

