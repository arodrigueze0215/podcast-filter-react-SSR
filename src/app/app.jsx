import React, { useRef, useState } from 'react';
import LayoutListPodcast from './LayoutListPodcast.jsx'
import GridPodcast from './GridPodcast.jsx'
import Filter from './Filter.jsx'
import Player from './player/Player.jsx'

//custom effects
import useFilterPodcast from './effects/useFilterPodcast';
import useSingleAudio from './effects/useSingleAudio'
import usePlay from './effects/usePlay.js';

//font awesome
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

export default function App(props) {

  //uses
  const [ iconPlay , setIconPlay] = useState(faPlayCircle);
  
  //useEffects
  const {query, setQuery, filteredPodcast, setFind} = useFilterPodcast(props.podcasts, props.findPodcast);
  const {setIdPodcast,  audio } = useSingleAudio(props.podcasts);
  const { isPlaying, setIsPlaying, currentPlay, setCurrentPlay } = usePlay();
  
  //refs
  const playerRef = useRef();

  //events
  const handleFilterOnchange = e => setQuery(e.currentTarget.value);
  const handleClickFindMore = () => setFind(query);
  const handleOnPlay = () => setIconPlay(faPauseCircle);
  const handleOnPause = () => setIconPlay(faPlayCircle);
  const handlePlay = (e) => {
    if (isPlaying) {
      setIsPlaying(false);
      setIconPlay(faPlayCircle);
    }
    else {
      setIdPodcast(e.currentTarget.getAttribute('data-id'));
      setCurrentPlay(e.currentTarget.getAttribute('data-id'));
      setIsPlaying(true);
      setIconPlay(faPauseCircle);
    }

  }
  return (
    <React.Fragment>
      <Filter onChange={handleFilterOnchange} query={query}/>
      <LayoutListPodcast>
        <GridPodcast 
          podcasts={filteredPodcast || props.podcasts} 
          query={query || ''} 
          onClickFindMore={handleClickFindMore}
          onPlay = {handlePlay}
          playIcon = {iconPlay? iconPlay: faPlayCircle}
          currentPlay={currentPlay}
        />
      </LayoutListPodcast>
      <Player 
        ref={playerRef} 
        playAudio={audio} 
        onPlay={handleOnPlay} 
        onPause={handleOnPause}
        isPlaying={isPlaying}
      />
    </React.Fragment>
  );
}