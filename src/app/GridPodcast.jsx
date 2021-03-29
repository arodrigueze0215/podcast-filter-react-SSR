import React, {useEffect} from 'react'
import PodcastComponent from './podcast/PodcastComponent.jsx'
import FindPodcast from './FindPodcast.jsx'
export default function GridPodcast(props) {
    
    const podcastList = props.podcasts.map(podcast => {
        return <PodcastComponent
            key={podcast.id}
            podcast={podcast}
            onPlay={props.onPlay}
            playIcon={props.playIcon}
            currentPlay={props.currentPlay}
        />
    });
    if (podcastList.length > 0) {
        return (
            <React.Fragment>
                {podcastList}
            </React.Fragment>
        );        
    } else {
         return (
            <React.Fragment>
                <FindPodcast query={props.query} onClick={props.onClickFindMore}/>
            </React.Fragment>
        );
    } 
}