import { useState, useMemo, useEffect } from 'react'

const useFilterPodcast = (listPodcast, findPodcast) => {
    const [query, setQuery] = useState('');
    const [find, setFind] = useState('');
    const [filteredPodcast, setFilteredPodcast] = useState(listPodcast);
    useMemo(() => {
        const result = listPodcast.filter(podcast => {
            return `${podcast.title}`.toLowerCase().includes(query.toLowerCase())
        });
        setFilteredPodcast(result);
    }, [listPodcast, query]);

    useEffect(async () => {
        if(find !== '') {
            const result = await findPodcast.execute(find);
            setFilteredPodcast(result);
        }

    }, [find]);
    return { query, setQuery, filteredPodcast, setFind };


};
export default useFilterPodcast
