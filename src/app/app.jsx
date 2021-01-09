import React from 'react';
import LayoutListPodcast from './LayoutListPodcast.jsx'
import GridPodcast from './GridPodcast.jsx'
import useGetPodcast from '../../browser/useGetPodcast'

export default function App(props) {
  //const podcasts = useGetPodcast();
 
  return (
      <LayoutListPodcast>
        <GridPodcast podcasts={props.podcasts}/>
      </LayoutListPodcast>    
  );
}