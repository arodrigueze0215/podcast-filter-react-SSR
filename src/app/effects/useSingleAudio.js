import { useState, useEffect } from 'react';

const useSingleAudio = (listPodcast) => {
    const [idPodcast, setIdPodcast] = useState('');
    const [audio, setAudio] = useState('');

    useEffect(() => {
        const result = listPodcast.filter( podcast => podcast.id == idPodcast);
        setAudio(result.length > 0 ? result[0].url_audio: '');
    }, [idPodcast]);
    return { setIdPodcast, audio, idPodcast }

};
export default useSingleAudio;