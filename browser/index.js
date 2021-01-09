import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app/app.jsx'
import { listAllPodcast } from './provider'
const container = document.getElementById('root');
listAllPodcast.execute().then((allPodcast) => {
    ReactDOM.hydrate(<App podcasts={allPodcast}/>, container);

});
