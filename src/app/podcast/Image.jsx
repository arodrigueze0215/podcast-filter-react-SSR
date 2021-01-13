import React from 'react'
import emptyPodcastImage from '../../../assets/podcast-bg.png'
const Image = React.forwardRef((props, ref) => {
    if (props.picture !== '') {
        return(
            <div  width="350px" height="350px" className="podcast-image__container">
                <img ref={ref} 
                    width="350px"
                    height="350px" 
                    data-img-src={props.picture}
                    src={props.picture}
                    alt={props.title}
                />
            </div>
        );        
    } else {
        return (
            <div  width="350px" height="350px" className="podcast-image__container">
                <img 
                    width="350px"
                    height="350px" 
                    data-img-src={emptyPodcastImage}
                    src={emptyPodcastImage}
                    alt={props.title}
                />
            </div>
        )
    }

});
export default Image