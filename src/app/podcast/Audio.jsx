import React from 'react';

const Audio = React.forwardRef((props, ref) => {
    return(
        <div className="podcast-info__audio">
            <audio data-src={props.audioSrc} ref={ref} controls preload="auto">
                <source type="audio/mpeg"/>
            </audio> 
        </div>
    );   
});

export default Audio;