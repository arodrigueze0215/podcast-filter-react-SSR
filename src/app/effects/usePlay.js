import { useState } from 'react';

const usePlayIcon = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentPlay, setCurrentPlay] = useState();
    return { isPlaying, setIsPlaying, currentPlay, setCurrentPlay };

};
export default usePlayIcon;