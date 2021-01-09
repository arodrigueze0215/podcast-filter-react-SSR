import React from 'react'
import emptyPodcastImage from '../../assets/podcast-bg.png'
const style = { 
    backgroundImage: `url(${emptyPodcastImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}
const Image = React.forwardRef((props, ref) => {
    return(
        <div  width="350px" height="325px" className="podcast-image__container" style={!props.picture? style : {color:'white'}}>
            <img ref={ref} 
                width="350px"
                height="325px" 
                data-img-src={props.picture !== '' ? props.picture : emptyPodcastImage}
                src={emptyPodcastImage}
                alt={props.title}
            />
        </div>
    );

});
export default Image