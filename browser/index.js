import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/style.styl'
import App from '../src/app/app.jsx'
import { listAllPodcast, findPodcast } from './provider'
const container = document.getElementById('root');
listAllPodcast.execute().then((allPodcast) => {
    ReactDOM.hydrate(<App findPodcast={findPodcast} podcasts={allPodcast}/>, container);

});
