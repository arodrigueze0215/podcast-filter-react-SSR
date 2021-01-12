const express = require('express')
import React from 'react';
import { renderToString } from 'react-dom/server';
import html from './html'
import App from '../src/app/app.jsx'
import { listAllPodcast } from './provider'

async function getThePodcasts() {
    return await listAllPodcast.execute();
}

const server = express();
server.use('/assets', express.static('public'));
server.use('/', express.static('public/'));

server.get('/', async (req, resp) => {
    resp.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    const allPodcast = await getThePodcasts()
    const appString = renderToString(<App podcasts={allPodcast}/>);
    resp.send(html({
        body:appString,
        title:'Hello',
        preloadedState:allPodcast
    }))
    
});
server.listen(3123, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port", 3123); 
}) 