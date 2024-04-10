const express = require('express');
const router = express.Router();
const { clients } = require('../store/mem-data');

const testClientId = 'tester';

router.post('/event', function(req, res) {
    const data = `data: ${JSON.stringify({ "date": new Date() })}\n\n`;
    clients.find(cl => cl.id === testClientId).newData(data)
    res.send('devices event was dispatched');
})

router.get('/sns', function (req, res, next) {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    };
    res.writeHead(200, headers);

    const data = `data: ${JSON.stringify({ "connection": "ok" })}\n\n`;

    res.write(data);

    //cache client for subsequent notification
    const newClient = {
        id: testClientId,
        response: res,
        newData: (data) => {
            res.write(data); 
        }
    };

    clients.push(newClient);

    req.on('close', () => {
        console.log(`${testClientId} Connection closed`);
    });
});

module.exports = router;
