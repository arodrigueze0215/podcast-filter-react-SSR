import React from 'react'

const FindPodcast = (props) => {
    return (
        <div className="list-podcast__more">
            <h3>{`Podcast Not found. You can get more Podcast with (${props.query})`}</h3>
            <button onClick={props.onClick}> Get more podacast </button>
        </div>
    );
}
export default FindPodcast