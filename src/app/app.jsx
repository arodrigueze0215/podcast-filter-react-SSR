import React from 'react';
import LayoutListPodcast from './LayoutListPodcast.jsx'
import GridPodcast from './GridPodcast.jsx'
import Filter from './Filter.jsx'
import useFilterPodcast from './effects/useFilterPodcast';


export default function App(props) {
  
  const {query, setQuery, filteredPodcast, setFind} = useFilterPodcast(props.podcasts, props.findPodcast);
  const handleFilterOnchange = e => setQuery(e.currentTarget.value);
  const handleClickFindMore = (e) => {
    setFind(query);
    console.log(e)
  }
  return (
    <React.Fragment>
      <Filter onChange={handleFilterOnchange} query={query}/>
      <LayoutListPodcast>
        <GridPodcast podcasts={filteredPodcast || props.podcasts} query={query || ''} onClickFindMore={handleClickFindMore}/>
      </LayoutListPodcast>
    </React.Fragment>
  );
}