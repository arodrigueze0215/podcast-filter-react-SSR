import React, { useRef } from 'react';
import Audio from './Audio.jsx'
import Image from './Image.jsx'
import useGetMp3Audio from '../effects/useGetMp3Audio';
import useGetImage from '../effects/useGetImage';
export default function PodcastComponent(props) {
    const { title, description, duration, uploaded_at, picture, url_audio }= props.podcast
    const audioRef = useRef()
    const imgRef = useRef()
    useGetMp3Audio(audioRef)
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
                        <p>{description.ellipsis(400) === ''? '-- NO DESCRIPTION --' : description.ellipsis(400)}</p>
                    </div>
                    <Audio ref={audioRef} audioSrc={url_audio}/>
                </div>
            </div>
        </article>
    )
}