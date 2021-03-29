import React from 'react';

const Audio = React.forwardRef((props, ref) => {
    const {audioSrc, onPlay, onPause}= props;
    return(
        <div className="podcast-info__audio">
            <audio src={audioSrc} ref={ref} controls onPlay={onPlay} onPause={onPause}>
                <source type="audio/mpeg"/>
            </audio> 
        </div>
    );   
});

export default Audio;