import React from 'react'
import PodcastComponent from './PodcastComponent.jsx'
export default function GridPodcast(props) {
    const podcastList = props.podcasts.map(podcast => <PodcastComponent key={podcast.id} podcast={podcast}/>)
    return (
        <React.Fragment>
            {podcastList}
        </React.Fragment>
    );
}