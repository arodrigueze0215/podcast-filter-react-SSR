const express = require('express');
const path = require('path');
const server = express();
server.use('/assets', express.static('public'));
server.use('/', express.static('public/'));

server.get('/', async (req, resp) => {
    resp.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    resp.sendFile(path.join(__dirname + '/index.html'));
    
});
server.listen(3123, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port", 3123); 
}) 