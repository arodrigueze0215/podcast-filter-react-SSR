import { getAllPodcast } from '../../../api'
import Podcast from '../domain/podcast'
export default class PodcastRepository {
    async all() {        
        const podcastFromAPI = await getAllPodcast();
        const { audio_clips } = podcastFromAPI.body
        const podcastsList = audio_clips.map((audio_clip) => {
            let image = '';
            if (audio_clip.urls !== undefined && audio_clip.urls.image !== undefined) image = audio_clip.urls.image;
            else if (audio_clip.urls !== undefined && audio_clip.urls.post_image !== undefined) image = audio_clip.urls.post_image.original;
            return new Podcast(
                audio_clip.id,
                audio_clip.title || '',
                audio_clip.description || '' ,
                audio_clip.duration,
                image,
                audio_clip.urls !== undefined ? audio_clip.urls.high_mp3: '',
                audio_clip.updated_at
            )            
        });
        return podcastsList
    }
}