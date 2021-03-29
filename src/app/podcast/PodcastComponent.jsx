import React, { useRef } from 'react';
import Image from './Image.jsx'
import useGetImage from '../effects/useGetImage';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const PodcastComponent = React.memo(props => {
    const { id, title, description, duration, uploaded_at, picture }= props.podcast
    const imgRef = useRef()
    useGetImage(imgRef)
    return (
        <article className="podcast-item">
            <Image ref={imgRef} 
                picture={picture} 
                title={title}
            />
            <div className="podcast-info">
                <div className="podcast-info__container">
                    <h1 className="podcast-info__title">{title}</h1>
                    <div className="podcast-info__details">
                        <h3 className="podcast-info__uploaded">{uploaded_at.formatDate()}</h3>
                        <h3>|</h3>
                        <h3 className="podcast-info__duration">{duration.humanize()}</h3>
                    </div>
                    <div className="podcast-info__description">
                        <p>{description.ellipsis(100) === ''? '-- NO DESCRIPTION --' : description.ellipsis(100)}</p>
                    </div>
                    <div className="podcast-info__play-container">
                        <FontAwesomeIcon 
                            size='2x'
                            onClick={props.onPlay}
                            data-id={id}
                            icon={props.playIcon}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}, (prevProps, nextProps) => `${prevProps.podcast.id}` !== nextProps.currentPlay);

export default PodcastComponent;