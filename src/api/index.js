import fetch from 'node-fetch';
async function getAllPodcast() {
    const podcasts = await fetch('https://api.audioboom.com/audio_clips?page[items]=100');
    return podcasts.json()
}


export { getAllPodcast }