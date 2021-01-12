import React, {useState} from 'react'
const useGetMorePodcast = (query, findPodcast) => {
    const [newPodcast, setNewPodcast] = useState('');
    const [findFilter, setFindFilter] = useState('');
    React.useEffect(async ()=>{
        const podcasts = await findPodcast.execute(findFilter);
        setNewPodcast(podcasts)

    }, [query]);
    return { newPodcast, setFindFilter}

}
export default useGetMorePodcast