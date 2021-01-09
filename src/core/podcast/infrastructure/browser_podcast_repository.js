import Podcast from '../domain/podcast'
export default class PodcastRepository {
    constructor (allPodcast) {
        this.allPodcast = allPodcast;
    }
    async all() {   
        const podcastsList = this.allPodcast.map((audio_clip) => {
            let image = '';
            if (audio_clip.urls !== undefined && audio_clip.urls.image !== undefined) image = audio_clip.urls.image;
            else if (audio_clip.urls !== undefined && audio_clip.urls.post_image !== undefined) image = audio_clip.urls.post_image.original;
            return new Podcast(
                audio_clip.id,
                audio_clip.title || '',
                audio_clip.description.text || '' ,
                audio_clip.duration.duration,
                image,
                audio_clip.urls !== undefined ? audio_clip.urls.high_mp3: '',
                audio_clip.uploaded_at.date
            )            
        });
        return podcastsList
    }
}
