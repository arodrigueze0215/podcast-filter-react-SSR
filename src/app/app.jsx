import React from 'react';
import Layout from './LayoutListPodcast.jsx'
import GridPodcast from './GridPodcast.jsx'
export default function App(props) {
  return (
    <React.Fragment>
      <Layout>
        <GridPodcast podcasts={props.podcasts}/>
      </Layout>
    </React.Fragment>
    
  );
}