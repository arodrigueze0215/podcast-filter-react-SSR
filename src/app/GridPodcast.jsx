import React, {useEffect} from 'react'
import PodcastComponent from './podcast/PodcastComponent.jsx'
export default function GridPodcast(props) {
    
    const podcastList = props.podcasts.map(podcast => {
        return <PodcastComponent key={podcast.id} podcast={podcast}/>
    });
    return (
        <React.Fragment>
            {podcastList}
        </React.Fragment>
    );
}