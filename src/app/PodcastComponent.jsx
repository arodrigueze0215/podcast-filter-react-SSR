import React from 'react';
import emptyPodcastImage from '../assets/podcast-bg.png'
export default function PodcastComponent(props) {
    const { title, description, duration, uploaded_at, picture }= props.podcast
    return (
        <article className="podcast-item">
            <div className="podcast-image__container">
                <img width="300px" height="400px" src={picture !== '' ? picture : emptyPodcastImage} alt={title}/>
            </div>
            <div className="podcast-info">
                <div className="podcast-info__container">
                    <h1 className="podcast-info__title">{title}</h1>
                    <div className="podcast-info__details">
                        <span className="podcast-info__uploaded">{uploaded_at.formatDate()}</span> |
                        <span className="podcast-info__duration">{duration}</span>
                    </div>
                    <p className="podcast-info__description">{description}</p>
                    <div className="podcast-info__audio"></div>
                </div>
            </div>
        </article>
    )
}