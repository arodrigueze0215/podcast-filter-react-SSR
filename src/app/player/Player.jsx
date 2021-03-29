import React from 'react'
import Audio from '../podcast/Audio.jsx'

const Player = React.forwardRef((props, ref) => {
    const { playAudio, isPlaying } = props;
    React.useEffect(()=>{
        if (isPlaying) ref.current.play();
        else ref.current.pause();
    }, [isPlaying, playAudio]);
    return (
        <section className="player">
            <Audio ref={ref} audioSrc={props.playAudio} onPlay={props.onPlay} onPause={props.onPause}/>
        </section>
    );
});
export default Player;