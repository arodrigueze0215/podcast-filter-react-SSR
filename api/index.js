import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server';
import html from './html'
import App from '../src/app/app.jsx'
import '../src/assets/css/style.styl'
import { listAllPodcast } from './provider'

const server = express();
server.use('/assets', express.static('public/assets'));
server.use('/', express.static('public/'));

server.get('/', async (req, resp) => {
    resp.setHeader('Content-Type', 'text/html')
    resp.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    const allPodcast = await getThePodcasts()
    const appString = renderToString(<App podcasts={allPodcast}/>);
    resp.end(html({
        body:appString,
        title:'Hello',
        preloadedState:allPodcast
    }))
    
});

async function getThePodcasts() {
    return await listAllPodcast.execute();
}
export default server