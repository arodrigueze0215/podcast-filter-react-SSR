import { useEffect, useState } from 'react';
import { listAllPodcast } from '../server/provider';

const useGetPodcast = (props) => {
    const [ podcasts, setPodcasts] = useState([]);
    useEffect( async () => {
        const all =  await getThePodcasts();
        setPodcasts(all);
    
      },[]);
    return podcasts;
}

async function getThePodcasts() {
    return await listAllPodcast.execute();
}

export default useGetPodcast;