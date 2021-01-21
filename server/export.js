const fs = require('fs');
const React = require('react');
import {renderToString} from 'react-dom/server';
import html from './html'
import { listAllPodcast } from './provider'
import App from '../src/app/app.jsx';

async function getThePodcasts() {
    const allPodcast = await listAllPodcast.execute();
    const appString = renderToString(<App podcasts={allPodcast}/>);
    const htmlFile = html({
        body:appString,
        title:'Hello',
        preloadedState:allPodcast
    })
    
    fs.writeFileSync('./public/index.html', htmlFile,(err) => {
        if (err) throw err;
    });
    console.log('The index.html file has been generated!');
}
getThePodcasts();
