import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server';
import html from './html'
import App from '../app/app.jsx'
import ListAllPodcast from '../core/podcast/actions/list_all_podcasts'
import PodcastRepository from '../core/podcast/repository/podcast_repository';

const server = express();
server.use('/assets', express.static('dist/assets'));

server.get('/', async (req, resp) => {
    const allPodcast = await getThePodcasts()
    const appString = renderToString(<App podcasts={allPodcast}/>);
    resp.send(html({
        body:appString,
        title:'Hello'
    }))
    
})
server.listen(3000, (err) => {
    if (err) console.log(err); 
    console.log("Server listening on PORT", 3000); 
})

async function getThePodcasts() {
    const podcastRepository = new PodcastRepository();
    const listAllPodcast = new ListAllPodcast(podcastRepository);
    const all = await listAllPodcast.execute();
    return all
  }